import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  recommendedPackages, 
  weekendPackages, 
  internationalPackages, 
  domesticPackages 
} from '../data/packages';

const PackageDetailsWithBooking = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [packageItem, setPackageItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    adults: 1,
    children: 0,
    specialRequests: ''
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // Combine all packages into one array to search
    const allPackages = [
      ...recommendedPackages.flat(),
      ...weekendPackages.flat(),
      ...internationalPackages.flat(),
      ...domesticPackages.flat()
    ];

    // Find the package with matching slug
    const foundPackage = allPackages.find(pkg => {
      const packageSlug = pkg.slug || pkg.title.toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      return packageSlug === slug;
    });

    if (foundPackage) {
      // Enhance package data with additional details
      const enhancedPackage = {
        ...foundPackage,
        slug: foundPackage.slug || foundPackage.title.toLowerCase()
          .replace(/[^\w\s]/gi, '')
          .replace(/\s+/g, '-'),
        description: foundPackage.description || `Experience the beauty of ${foundPackage.location} with our carefully curated ${foundPackage.title}.`,
        itinerary: foundPackage.itinerary || generateDefaultItinerary(foundPackage),
        inclusions: foundPackage.inclusions || getDefaultInclusions(),
        exclusions: foundPackage.exclusions || getDefaultExclusions(),
        gallery: foundPackage.gallery || generateGallery(foundPackage.image),
        highlights: foundPackage.highlights || getDefaultHighlights()
      };
      setPackageItem(enhancedPackage);
    }
    setLoading(false);
  }, [slug]);

  const generateDefaultItinerary = (pkg) => {
    return [
      {
        day: 1,
        title: "Arrival & Orientation",
        description: `Arrive at ${pkg.location.split(',')[0]} and check into your accommodation.`,
        highlights: ["Airport pickup", "Welcome drink", "Briefing session"]
      },
      {
        day: 2,
        title: "Full Day Exploration",
        description: `Spend the day exploring ${pkg.location.split(',')[0]} with your guide.`,
        highlights: ["Guided tour", "Local lunch", "Cultural activities"]
      }
    ];
  };

  const getDefaultInclusions = () => [
    "Accommodation",
    "Daily Breakfast",
    "Sightseeing as per itinerary",
    "Transportation"
  ];

  const getDefaultExclusions = () => [
    "Airfare/Train fare",
    "Personal expenses",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ];

  const generateGallery = (mainImage) => [
    mainImage,
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpfGVufDB8fDB8fHww"
  ];

  const getDefaultHighlights = () => [
    "Expert local guides",
    "Small group experience",
    "Authentic cultural interactions",
    "Flexible itinerary options"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { package: packageItem, bookingData });
    
    // Simulate API call
    setTimeout(() => {
      setBookingSuccess(true);
      setShowBookingForm(false);
    }, 1500);
  };

  const resetBooking = () => {
    setBookingSuccess(false);
    setBookingData({
      name: '',
      email: '',
      phone: '',
      date: '',
      adults: 1,
      children: 0,
      specialRequests: ''
    });
  };

  if (loading) {
    return <div className="container py-5 text-center">Loading...</div>;
  }

  if (!packageItem) {
    return (
      <div className="container py-5 text-center">
        <h2>Package not found</h2>
        <button 
          className="btn btn-primary mt-3"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="package-detail">
      {/* Hero Image */}
      <div className="hero-image position-relative">
        <img 
          src={packageItem.image} 
          alt={packageItem.title} 
          className="w-100"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <h1 className="text-white text-center">{packageItem.title}</h1>
        </div>
      </div>
      
      {/* Package Info */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex mb-4 flex-wrap">
              <div className="me-4 mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                <span>{packageItem.location}</span>
              </div>
              <div className="me-4 mb-2">
                <i className="bi bi-clock me-2"></i>
                <span>{packageItem.duration}</span>
              </div>
              <div className="mb-2">
                <i className="bi bi-currency-dollar me-2"></i>
                <span>{packageItem.price}</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3>Overview</h3>
              <p>{packageItem.description}</p>
            </div>
            
            <div className="mb-4">
              <h3>Highlights</h3>
              <div className="row">
                {packageItem.highlights.map((highlight, index) => (
                  <div className="col-md-6 mb-2" key={index}>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>{highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3>Itinerary</h3>
              <div className="accordion" id="itineraryAccordion">
                {packageItem.itinerary.map((day, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button 
                        className="accordion-button" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#day${index + 1}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                      >
                        Day {index + 1}: {day.title}
                      </button>
                    </h2>
                    <div 
                      id={`day${index + 1}`} 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      data-bs-parent="#itineraryAccordion"
                    >
                      <div className="accordion-body">
                        <p>{day.description}</p>
                        {day.highlights && (
                          <ul>
                            {day.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3>Inclusions</h3>
              <ul className="list-group list-group-flush">
                {packageItem.inclusions.map((inclusion, index) => (
                  <li className="list-group-item" key={index}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {inclusion}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h3>Exclusions</h3>
              <ul className="list-group list-group-flush">
                {packageItem.exclusions.map((exclusion, index) => (
                  <li className="list-group-item" key={index}>
                    <i className="bi bi-x-circle-fill text-danger me-2"></i>
                    {exclusion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card shadow-sm sticky-top" style={{ top: '20px' }}>
              <div className="card-body">
                <h4 className="card-title mb-4">Package Details</h4>
                
                <div className="d-flex justify-content-between mb-3">
                  <span>Duration:</span>
                  <span className="fw-bold">{packageItem.duration}</span>
                </div>
                
                <div className="d-flex justify-content-between mb-3">
                  <span>Destinations:</span>
                  <span className="fw-bold">{packageItem.location}</span>
                </div>
                
                <div className="d-flex justify-content-between mb-4">
                  <span>Price:</span>
                  <span className="fw-bold">{packageItem.price}</span>
                </div>
                
                {!showBookingForm && !bookingSuccess && (
                  <>
                    <button 
                      className="btn btn-primary w-100 mb-3"
                      onClick={() => setShowBookingForm(true)}
                    >
                      <i className="bi bi-calendar-check me-2"></i> Book Now
                    </button>
                    
                    <button className="btn btn-outline-primary w-100">
                      <i className="bi bi-headset me-2"></i> Enquire Now
                    </button>
                  </>
                )}
                
                {showBookingForm && (
                  <form onSubmit={handleBookingSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="date" className="form-label">Travel Date</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        id="date" 
                        name="date"
                        value={bookingData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="row mb-3">
                      <div className="col">
                        <label htmlFor="adults" className="form-label">Adults</label>
                        <input 
                          type="number" 
                          className="form-control" 
                          id="adults" 
                          name="adults"
                          min="1"
                          value={bookingData.adults}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col">
                        <label htmlFor="children" className="form-label">Children</label>
                        <input 
                          type="number" 
                          className="form-control" 
                          id="children" 
                          name="children"
                          min="0"
                          value={bookingData.children}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="specialRequests" className="form-label">Special Requests</label>
                      <textarea 
                        className="form-control" 
                        id="specialRequests" 
                        name="specialRequests"
                        rows="3"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100 mb-2">
                      Confirm Booking
                    </button>
                    
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary w-100"
                      onClick={() => setShowBookingForm(false)}
                    >
                      Cancel
                    </button>
                  </form>
                )}
                
                {bookingSuccess && (
                  <div className="alert alert-success">
                    <h5 className="alert-heading">Booking Successful!</h5>
                    <p>Thank you for booking {packageItem.title}. We've sent confirmation details to {bookingData.email}.</p>
                    <hr />
                    <button 
                      className="btn btn-sm btn-success"
                      onClick={resetBooking}
                    >
                      Make Another Booking
                    </button>
                  </div>
                )}
                
                <div className="mt-4">
                  <h6>Need help?</h6>
                  <p className="small mb-1">
                    <i className="bi bi-telephone-fill me-2"></i> +91 9876543210
                  </p>
                  <p className="small">
                    <i className="bi bi-envelope-fill me-2"></i> info@travelagency.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Gallery</h2>
          <div className="row g-3">
            {packageItem.gallery.map((image, index) => (
              <div className="col-md-4 col-6" key={index}>
                <img 
                  src={image} 
                  alt={`${packageItem.title} - ${index + 1}`} 
                  className="img-fluid rounded shadow-sm"
                  style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsWithBooking;