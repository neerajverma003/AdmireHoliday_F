import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  recommendedPackages, 
  weekendPackages, 
  internationalPackages, 
  domesticPackages 
} from '../data/packages'; 

const TourDetails = () => {
  const { slug } = useParams();
  
  // Combine all packages into a single array
  const allPackages = [
    ...recommendedPackages.flat(),
    ...weekendPackages.flat(),
    ...internationalPackages.flat(),
    ...domesticPackages.flat()
  ];
  
  // Find the package that matches the slug
  const tourPackage = allPackages.find(pkg => {
    // Extract slug from link if package doesn't have slug property
    const packageSlug = pkg.slug || pkg.link.split('/').pop();
    return packageSlug === slug;
  });

  if (!tourPackage) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Tour package not found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  // Generate similar packages (excluding current package)
  const similarPackages = allPackages
    .filter(pkg => pkg.id !== tourPackage.id && pkg.location.includes(tourPackage.location.split(',')[0]))
    .slice(0, 3);

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs mb-6">
        <ul>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/explorenow">Tours</Link></li>
          <li className="text-primary">{tourPackage.title}</li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image Gallery */}
        <div className="lg:w-2/3">
          <div className="rounded-xl overflow-hidden mb-4">
            <img 
              src={tourPackage.image || 'https://via.placeholder.com/800x500'} 
              alt={tourPackage.title}
              className="w-full h-96 object-cover"
            />
          </div>
          
          {/* Additional Images Placeholder */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-24 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={tourPackage.image || 'https://via.placeholder.com/300x200'} 
                  alt={`${tourPackage.title} ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Tour Description */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">About the Tour</h2>
            <p className="text-gray-700 mb-4">
              Experience the breathtaking beauty of {tourPackage.location} with our carefully curated {tourPackage.title}. 
              This {tourPackage.duration.toLowerCase()} tour offers an unforgettable journey through some of the most stunning landscapes and cultural highlights.
            </p>
            <p className="text-gray-700">
              Our package includes comfortable accommodations, expert guides, and all the necessary arrangements to ensure 
              you have a seamless and memorable travel experience.
            </p>
          </div>
        </div>
        
        {/* Right Column - Booking Info */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-md sticky top-4">
            <h1 className="text-3xl font-bold mb-2">{tourPackage.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600">{tourPackage.location}</span>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600">{tourPackage.duration}</span>
            </div>
            
            <div className="mb-6">
              <span className="text-2xl font-bold text-primary">
                {tourPackage.price.includes('₹') ? tourPackage.price : `₹${tourPackage.price}`}
              </span>
              <span className="text-gray-500 text-sm ml-1">per person</span>
            </div>
            
            <Link to="/get-a-quote" className="btn btn-primary w-full mb-4">Book Now</Link>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Guided tours with expert local guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Comfortable accommodations</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>All meals included (as per itinerary)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Transportation throughout the tour</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tour Itinerary */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>
        
        <div className="space-y-4">
          {['Day 1', 'Day 2', 'Day 3'].map((day, index) => (
            <div key={index} className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
              <div className="collapse-title text-xl font-medium">
                {day}: Arrival and Orientation
              </div>
              <div className="collapse-content"> 
                <p>
                  Upon arrival at your destination, you'll be greeted by our representative and transferred to your hotel. 
                  After check-in and some time to freshen up, you'll meet your tour guide for a briefing about the upcoming adventures. 
                  In the evening, enjoy a welcome dinner featuring local cuisine.
                </p>
                <div className="mt-3">
                  <p className="font-semibold">Meals included: Dinner</p>
                  <p className="font-semibold">Accommodation: 4-star hotel</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Inclusions & Exclusions */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Inclusions</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Accommodation as per itinerary</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Meals as specified (B=Breakfast, L=Lunch, D=Dinner)</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>All transfers and transportation in air-conditioned vehicles</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Exclusions</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>International/Domestic flights</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Travel insurance</span>
            </li>
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Personal expenses (laundry, minibar, etc.)</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Similar Tours */}
      {similarPackages.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {similarPackages.map((pkg) => (
              <div key={pkg.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={pkg.image || 'https://via.placeholder.com/400x300'} alt={pkg.title} className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{pkg.title}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="card-actions justify-between items-center mt-4">
                    <span className="font-bold">{pkg.price.includes('₹') ? pkg.price : `₹${pkg.price}`}</span>
                    <Link to={`/destinations/${pkg.slug || pkg.link.split('/').pop()}`} className="btn btn-primary btn-sm">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetails;