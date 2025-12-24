import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const ViewAll = () => {
  const { type } = useParams(); // exclusive | weekend | trending
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, [type]);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/getpackage");
      const data = await res.json();

      let filtered = [];

      const hasClassification = (pkg, term) => {
        const cls = pkg.classification;
        const needle = String(term).toLowerCase();
        if (Array.isArray(cls)) return cls.some((c) => String(c).toLowerCase().includes(needle));
        if (typeof cls === 'string') return String(cls).toLowerCase().includes(needle);
        return false;
      };

      if (type === "exclusive") {
        filtered = data.filter((p) => hasClassification(p, "exclusive"));
      }

      if (type === "weekend") {
        filtered = data.filter((p) => hasClassification(p, "weekend"));
      }

      if (type === "trending") {
        filtered = data.filter((p) => hasClassification(p, "trending"));
      }

      setPackages(filtered);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 bg-[#f6f6f6] min-h-screen">
        <h1 className="text-2xl md:text-3xl font-extrabold text-orange-500 mb-10 capitalize">
          {type} Packages
        </h1>

        {loading ? (
          <p className="text-center py-20">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <Link
                key={pkg._id}
                to={`/itineraries/${pkg._id}`}
                className="bg-white rounded-2xl border shadow hover:shadow-xl transition"
              >
                <img
                  src={
                    pkg.destination_thumbnails?.[0] ||
                    pkg.media?.[0]
                  }
                  alt={pkg.title}
                  className="h-[220px] w-full object-cover rounded-t-2xl"
                />

                <div className="p-4">
                  <h3 className="font-bold text-sm line-clamp-2 mb-2">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                    {pkg.destination_detail?.slice(0, 80)}...
                  </p>

                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-orange-500">
                      ₹{pkg.pricing?.standard_price || "On Request"}
                    </span>
                    <span className="text-gray-500">
                      {pkg.duration}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default ViewAll;
