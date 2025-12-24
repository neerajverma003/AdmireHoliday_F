


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogHero = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ SEARCH STATES (SAME AS HOME HERO)
  const [showSearch, setShowSearch] = useState(false);
  const [productType, setProductType] = useState("Tour");
  const [tripDuration, setTripDuration] = useState("3 to 5 days");
  const [includeFlight, setIncludeFlight] = useState(true);

  /* ================= FETCH BLOG HERO VIDEO ================= */
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/admin/hero/video"
        );
        const res = await response.json();

        const blogItem = res?.data?.find(
          (item) => item.title === "Blog"
        );

        const publicVideo = blogItem?.video_url?.find(
          (vid) => vid.visibility === "Public"
        );

        if (publicVideo?.url) {
          setVideoUrl(publicVideo.url);
        }
      } catch (error) {
        console.error("Blog Hero video error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  if (loading) return null;

  return (
    <section className="relative w-full h-[65vh] md:h-[85vh] overflow-hidden">
      {/* 🎥 VIDEO BACKGROUND */}
      {videoUrl && (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl leading-tight">
          Travel Blogs Stories <br />
          <span className="text-blue-400">Admire Holidays</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl">
          Premium Domestic & International Tour Packages for the Modern Explorer
        </p>

        {/* 🔍 SEARCH BAR (EXACT SAME AS HOME HERO) */}
        <motion.div
          layout
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => setShowSearch(true)}
          className="mt-8 w-full max-w-xl bg-white rounded-full shadow-xl px-6 py-4 flex items-center gap-3 cursor-pointer"
        >
          <span className="text-gray-400 text-lg">🔍</span>
          <span className="text-gray-400">
            Search for destinations...
          </span>
        </motion.div>
      </div>

      {/* ================= SEARCH POPUP (COPY FROM HOME HERO) ================= */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 80, scale: 0.94, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 80, scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* INPUT */}
              <div className="p-4 border-b">
                <input
                  autoFocus
                  placeholder="Search for Destinations"
                  className="w-full border rounded-full px-5 py-3 outline-none"
                />
              </div>

              <div className="p-6 space-y-6">
                {/* PRODUCT TYPE */}
                <div>
                  <h4 className="font-semibold mb-3">Product Type</h4>
                  <div className="flex gap-3">
                    {["Tour", "Activity"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setProductType(type)}
                        className={`px-6 py-2 rounded-full border transition ${
                          productType === type
                            ? "bg-orange-500 text-white border-orange-500"
                            : "text-gray-600"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* TRIP DURATION */}
                <div>
                  <h4 className="font-semibold mb-3">Trip Duration</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Upto 1 Day",
                      "2 to 3 days",
                      "3 to 5 days",
                      "5 to 7 days",
                      "7+ Days",
                    ].map((d) => (
                      <button
                        key={d}
                        onClick={() => setTripDuration(d)}
                        className={`px-4 py-2 rounded-full border text-sm transition ${
                          tripDuration === d
                            ? "bg-orange-500 text-white border-orange-500"
                            : "text-gray-600"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* PRICE RANGE */}
                <div>
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <div className="flex gap-4">
                    <input
                      value="INR 0"
                      readOnly
                      className="w-1/2 border rounded-lg px-3 py-2"
                    />
                    <input
                      value="INR 500000"
                      readOnly
                      className="w-1/2 border rounded-lg px-3 py-2"
                    />
                  </div>
                </div>

                {/* FLIGHTS */}
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeFlight}
                    onChange={() => setIncludeFlight(!includeFlight)}
                    className="w-5 h-5 accent-orange-500"
                  />
                  I want flights to be included
                </label>
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center p-4 border-t">
                <button
                  onClick={() => setShowSearch(false)}
                  className="text-gray-600 underline"
                >
                  Clear All
                </button>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
                  Search For Products
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogHero;
