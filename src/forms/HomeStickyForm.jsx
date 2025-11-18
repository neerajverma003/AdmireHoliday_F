import React, { useState } from "react";
import Swal from "sweetalert2";
import complaintImage from "../assets/images/complaint.jpg";
import { submitSuggestionComplaint } from "../api/api.js";
const HomeStickyForm = () => {
  const [activeTab, setActiveTab] = useState("suggestion");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { name, email } = formData;

      if (name.trim().length < 2) {
        Swal.fire("Oops!", "Name must be at least 2 characters.", "warning");
        return;
      }

      if (!validateEmail(email)) {
        Swal.fire(
          "Invalid Email",
          "Please enter a valid email address.",
          "error"
        );
        return;
      }
      const response = await submitSuggestionComplaint(formData);
      console.log(response);

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Your message has been sent.",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        setFormData({ name: "", email: "", message: "" });
      }
      
    } catch (error) {}
  };

  return (
    <div className="flex max-w-[900px] w-full mx-auto mt-24 mb-10 rounded-xl overflow-hidden shadow-lg bg-white font-segoe min-h-[420px]">
      <div
        className="flex-1 bg-cover bg-center relative min-h-[420px]"
        style={{ backgroundImage: `url(${complaintImage})` }}
      >
        <div className="h-full bg-black/20" />
      </div>

      <div className="flex-1 p-6 flex flex-col justify-start">
        <div className="flex gap-2 mb-4">
          <button
            className={`flex-1 px-3 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "suggestion"
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setActiveTab("suggestion")}
          >
            Suggestions or Complaints
          </button>
          <button
            className={`flex-1 px-3 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "not_response"
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setActiveTab("not_response")}
          >
            Not Getting Response
          </button>
        </div>

        {activeTab === "suggestion" ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="font-semibold block mb-1">Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label className="font-semibold block mb-1">Email Address</label>
              <input
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="font-semibold block mb-1">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md text-sm resize-y min-h-[100px] mt-2"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-bold text-sm py-2 rounded-md mt-3 hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-sm text-gray-800 mt-2">
            <p>If you are not getting a response, please email us at:</p>
            <a
              href="mailto:info@admireholidays.com"
              className="text-red-500 font-bold text-base"
            >
              info@admireholidays.com
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeStickyForm;
