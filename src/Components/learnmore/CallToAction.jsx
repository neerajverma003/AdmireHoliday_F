import { Info } from 'lucide-react';
import React, { useState } from 'react';
import TravelEnquiryForm from '../../forms/EnquiryForm';
import PlanMyTripForm from '../../forms/PlanMyTripForm';
 
export default function CallToAction() {
  const [showPlanTripForm, setShowPlanTripForm] = useState(false);
  const [showJourneyForm, setShowJourneyForm] = useState(false);
 
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-12">
          <Info className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Travel With <span className="text-blue-600">Admire Holidays</span> — Travel Differently
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            If you’re looking for more than just a trip, Admire Holidays invites you to travel with purpose, joy, and discovery.
            Let’s go beyond the guidebooks and tourist traps — and uncover the true spirit of every destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Plan My Journey Button */}
            <button
              onClick={() => setShowJourneyForm(true)}
              className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Plan My Journey
            </button>
 
            {/* Plan My Trip Button */}
            <button
              onClick={() => setShowPlanTripForm(true)}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Plan My Trip
            </button>
          </div>
        </div>
      </div>
 
      {/* Modals for both forms */}
      {showPlanTripForm && (
        <PlanMyTripForm onClose={() => setShowPlanTripForm(false)} />
      )}
      {showJourneyForm && (
        <TravelEnquiryForm onClose={() => setShowJourneyForm(false)} />
      )}
    </section>
  );
}