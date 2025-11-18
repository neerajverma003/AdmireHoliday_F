import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dob: '',
    nationality: '',
    maritalStatus: '',
    anniversary: '',
    city: '',
    state: '',
    mobile: '',
    email: '',
    passportNumber: '',
    passportExpiry: '',
    issuingCountry: '',
    panCard: '',
    domesticPlan: '',
    internationalPlan: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileCompletion, setProfileCompletion] = useState(30);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Update completion percentage when fields are filled
    updateCompletionPercentage({ ...formData, [name]: value });
  };

  const updateCompletionPercentage = (data) => {
    const totalFields = 16; // Total fields in the form
    const filledFields = Object.values(data).filter(val => val !== '').length;
    const percentage = Math.min(100, Math.round((filledFields / totalFields) * 100));
    setProfileCompletion(percentage);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Profile updated successfully!');
      }, 1500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header with Save button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
        <button
          type="submit"
          form="profileForm"
          disabled={isSubmitting}
          className={`px-4 py-2 rounded-md ${isSubmitting 
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
            : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          {isSubmitting ? 'Saving...' : 'SAVE'}
        </button>
      </div>

      {/* Profile Completion Section */}
      <section className="bg-blue-50 rounded-lg p-6 mb-8">
        <div className="flex items-center">
          <div className="relative mr-4">
            <svg width="40" height="39" viewBox="-1 0 42 39">
              <text x="9" y="23.644" className="text-xs font-black">{profileCompletion}%</text>
              <circle cx="20" cy="19.5" r="19" className="stroke-white stroke-[3px] fill-none"/>
              <path 
                d={`M 20 0.5 A 19 19 0 1 1 ${20 + 19 * Math.cos(2 * Math.PI * profileCompletion/100 - Math.PI/2)} ${19.5 + 19 * Math.sin(2 * Math.PI * profileCompletion/100 - Math.PI/2)}`} 
                className="stroke-teal-600 stroke-[3px] fill-none"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">
              {profileCompletion < 100 ? 'Complete your profile' : 'Profile complete!'}
            </h2>
            <p className="text-gray-600">
              {profileCompletion < 50 
                ? 'Share more information to get personalized experience' 
                : 'Great job! Your profile is looking good'}
            </p>
          </div>
          {profileCompletion < 100 && (
            <button 
              type="button" 
              onClick={() => document.getElementById('email').focus()}
              className="text-blue-600 font-medium hover:text-blue-800"
            >
              Add Missing Info
            </button>
          )}
        </div>
      </section>

      <form id="profileForm" onSubmit={handleSubmit}>
        {/* General Information Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">General Information</h3>
          
          {/* Name Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-3 pt-5 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  FIRST NAME
                </label>
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  MIDDLE NAME (Optional)
                </label>
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-3 pt-5 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  LAST NAME
                </label>
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>

          {/* Gender, DOB, Nationality Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="w-[23%] min-w-[150px]">
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  GENDER
                </label>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  ▼
                </div>
              </div>
            </div>
            <div className="w-[24%] min-w-[150px]">
              <div className="relative">
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  DATE OF BIRTH
                </label>
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="india">India</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  {/* Add more countries */}
                </select>
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  NATIONALITY
                </label>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Marital Status Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  MARITAL STATUS
                </label>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  ▼
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="date"
                  name="anniversary"
                  value={formData.anniversary}
                  onChange={handleChange}
                  disabled={formData.maritalStatus !== 'married'}
                  className={`w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formData.maritalStatus !== 'married' ? 'bg-gray-100' : ''}`}
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  ANNIVERSARY
                </label>
              </div>
            </div>
          </div>

          {/* City/State Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  CITY OF RESIDENCE
                </label>
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  STATE
                </label>
                <p className="text-xs text-gray-500 mt-2">Required for GST purpose on your tax invoice</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Details</h3>
          <p className="text-gray-600 mb-4">Add contact information to receive booking details & other alerts</p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full p-3 pt-5 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  MOBILE NUMBER
                </label>
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                )}
                {formData.mobile && !errors.mobile && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    ✓
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 pt-5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter email address"
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  EMAIL ID
                </label>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
                {formData.email && !errors.email && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                    ✓
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Documents Details Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Documents Details</h3>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  PASSPORT NO.
                </label>
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <input
                  type="date"
                  name="passportExpiry"
                  value={formData.passportExpiry}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  EXPIRY DATE
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-2">
            <div className="w-[49%] min-w-[200px]">
              <div className="relative">
                <select
                  name="issuingCountry"
                  value={formData.issuingCountry}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Select</option>
                  <option value="india">India</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  ISSUING COUNTRY
                </label>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  ▼
                </div>
              </div>
            </div>
            <div className="w-[49%] min-w-[200px]">
              <div className="relative">
                <input
                  type="text"
                  name="panCard"
                  value={formData.panCard}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  PAN CARD NUMBER
                </label>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">NOTE:</span> Your PAN No. will only be used for international bookings as per RBI Guidelines
          </p>
        </div>

        {/* Preferences Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Preferences</h3>
          <p className="text-gray-600 mb-4 flex items-center">
            This ensures a seamless insurance purchase and ensures protection for future bookings.
            <button 
              type="button"
              className="ml-2 w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs hover:bg-gray-300"
              title="Choose where you want to be covered, we'll preselect it for your future trips."
            >
              i
            </button>
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <select
                  name="domesticPlan"
                  value={formData.domesticPlan}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Select Domestic Plan</option>
                  <option value="basic">Basic Coverage</option>
                  <option value="premium">Premium Coverage</option>
                </select>
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  Domestic Trip Protection Plan
                </label>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  ▼
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <select
                  name="internationalPlan"
                  value={formData.internationalPlan}
                  onChange={handleChange}
                  className="w-full p-3 pt-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Select International Plan</option>
                  <option value="basic">Basic Coverage</option>
                  <option value="premium">Premium Coverage</option>
                </select>
                <label className="absolute top-2 left-3 text-xs text-gray-500">
                  International Travel Insurance Plan
                </label>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  ▼
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frequent Flyer Section */}
        
      </form>
    </div>
  );
};

export default ProfileForm;