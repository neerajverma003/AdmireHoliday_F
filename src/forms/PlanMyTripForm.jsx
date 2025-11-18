import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const PlanMyTripForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",       // ✅ matches schema
    from: "",
    to: "",
    fromDate: "",
    toDate: "",
    days: "",
    adults: "",
    kids: "",
    budget: "",
    purpose: "",
    consultation: false, // ✅ matches schema
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9+\-\s]{7,15}$/.test(phone);

  const planYourJourneyForm = async (data) => {
    try {
      const response = await axios.post(
        "https://api.admireholidays.com/api/v1/planYourTrip",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      return Swal.fire("Oops!", "Please enter your name.", "error");
    }
    if (!validateEmail(formData.email.trim())) {
      return Swal.fire("Oops!", "Please enter a valid email address.", "error");
    }
    if (!formData.phone_no.trim()) {
      return Swal.fire("Oops!", "Mobile Number is required.", "error");
    }
    if (!validatePhone(formData.phone_no.trim())) {
      return Swal.fire("Oops!", "Please enter a valid phone number.", "error");
    }
    if (formData.days && (isNaN(formData.days) || Number(formData.days) < 1)) {
      return Swal.fire("Oops!", "Number of days must be a positive number.", "error");
    }

    setIsSubmitting(true);

    try {
      // ✅ Correct payload
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone_no: formData.phone_no.trim(), // ✅ schema key
        from: formData.from.trim(),
        to: formData.to.trim(),
        NumberodDays: formData.days ? parseInt(formData.days) : 0, // ✅ schema key
        adults: formData.adults ? parseInt(formData.adults) : 0,
        kids: formData.kids ? parseInt(formData.kids) : 0,
        budget: formData.budget ? parseInt(formData.budget) : 0,   // ✅ number not string
        purpose: formData.purpose.trim(),
        consultation: formData.consultation,                       // ✅ schema key
      };

      console.log("Submitting data:", submissionData);
      const response = await planYourJourneyForm(submissionData);
      console.log("API Response:", response);

      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Admire Holidays will contact you soon.",
          timer: 1800,
          showConfirmButton: false,
        }).then(() => onClose());
      } else {
        throw new Error(response.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Full error details:", {
        message: error.message,
        response: error.response?.data,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          data: error.config?.data,
          headers: error.config?.headers,
        },
      });

      let errorMessage =
        error.response?.data?.message ||
        error.message ||
        "There was an error submitting your form";

      if (Array.isArray(error.response?.data?.errors)) {
        errorMessage = error.response.data.errors.join("\n");
      } else if (
        error.response?.data?.errors &&
        typeof error.response.data.errors === "object"
      ) {
        errorMessage = Object.entries(error.response.data.errors)
          .map(([field, message]) => `${field}: ${message}`)
          .join("\n");
      }

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        html: `<div style="text-align:left">${errorMessage.replace(/\n/g, "<br>")}</div>`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2"
      onClick={onClose}
      style={{ overflowY: "auto" }}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-2 sm:p-8 shadow-lg relative w-full max-w-[600px]"
        style={{ maxHeight: "85vh", overflowY: "auto", boxSizing: "border-box" }}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 text-teal-600 hover:text-red-600 text-2xl font-bold"
          aria-label="Close form"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-[#0D9488]">
          Plan My Trip
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <InputField label="Name*" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
          <InputField label="Email*" name="email" value={formData.email} onChange={handleChange} type="email" required placeholder="Your Email" />
          <InputField label="Phone Number*" name="phone_no" value={formData.phone_no} onChange={handleChange} required placeholder="Phone Number" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <InputField label="From (e.g., Delhi)" name="from" value={formData.from} onChange={handleChange} placeholder="From" />
          <InputField label="To (e.g., Manali)" name="to" value={formData.to} onChange={handleChange} placeholder="To" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <InputField label="From Date" name="fromDate" value={formData.fromDate} onChange={handleChange} type="date" />
          <InputField label="To Date" name="toDate" value={formData.toDate} onChange={handleChange} type="date" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <InputField label="Number of Days" name="days" value={formData.days} onChange={handleChange} type="number" placeholder="Days" min="1" />
          <InputField label="Adults" name="adults" value={formData.adults} onChange={handleChange} type="number" placeholder="Adults" min="0" />
          <InputField label="Kids" name="kids" value={formData.kids} onChange={handleChange} type="number" placeholder="Kids" min="0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <InputField label="Budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., 20000" />
          <InputField label="Purpose" name="purpose" value={formData.purpose} onChange={handleChange} placeholder="Vacation, Honeymoon, etc." />
        </div>

        <div className="mt-3">
          <label className="block mb-2 gap-4 font-medium text-[#0D9488]">Do you need free consultant?</label>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="consultation"
                value="yes"
                checked={formData.consultation === true}
                onChange={() => setFormData((prev) => ({ ...prev, consultation: true }))}
                className="form-radio text-[#0D9488]"
              />
              <span className="ml-2 text-gray-700 select-none">Yes</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                name="consultation"
                value="no"
                checked={formData.consultation === false}
                onChange={() => setFormData((prev) => ({ ...prev, consultation: false }))}
                className="form-radio text-[#0D9488]"
              />
              <span className="ml-2 text-gray-700 select-none">No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg font-semibold text-white transition-colors mt-6"
          style={{
            backgroundColor: "#0D9488",
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) e.currentTarget.style.backgroundColor = "#0B7A74";
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) e.currentTarget.style.backgroundColor = "#0D9488";
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

const InputField = React.memo(
  ({ label, name, value, onChange, placeholder = "", type = "text", required = false, min }) => (
    <div>
      <label className="block mb-1 font-medium text-[#0D9488]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        className="w-full border rounded px-4 py-3 text-sm focus:ring-2 focus:ring-[#0D9488] focus:outline-none"
        style={{ boxSizing: "border-box" }}
      />
    </div>
  )
);

export default PlanMyTripForm;
