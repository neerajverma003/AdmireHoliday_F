import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const InternationalPackage = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const animationFrameRef = useRef(null);
  const animationOffsetRef = useRef(0);
  const [cards, setCards] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const cardSpacing = 320; // Increased from 280 to 380

  //  Fetch API
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/v1/destination/home/get"
        );
        const json = await res.json();

        const international = json?.data?.filter(
          (d) =>
            typeof d.domestic_or_international === "string" &&
            d.domestic_or_international.toLowerCase() === "international"
        );

        if (international?.length) {
          setDestinations(international);

          // Preload all images
          const imagePromises = international.map((dest) => {
            return new Promise((resolve) => {
              const img = new Image();
              const imageSrc = dest.show_image?.[0] || dest.title_image?.[0];
              img.onload = () => resolve();
              img.onerror = () => resolve(); // Continue even if image fails
              img.src = imageSrc;
            });
          });

          // Wait for all images to load
          Promise.all(imagePromises).then(() => {
            setImagesLoaded(true);
            // Initialize cards with offsets after images load
            setCards(
              international.map((dest, i) => ({
                ...dest,
                offset: i * cardSpacing,
                id: dest._id || i,
              }))
            );
          });
        }
      } catch (err) {
        console.error("Destination fetch error:", err);
      }
    };

    fetchDestinations();
  }, []);

  const handleCardClick = (card) => {
    navigate(`/destination-itineraries/${card._id}`);
  };

  //  Smooth continuous slider animation
  useEffect(() => {
    if (cards.length === 0) return;

    const totalCards = cards.length;
    let lastTime = performance.now();

    const updateCards = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Smooth animation speed (60fps normalized)
      animationOffsetRef.current += (deltaTime / 30) * 0.8;

      setCards((prevCards) =>
        prevCards.map((card) => {
          const position = card.offset - animationOffsetRef.current;

          let newOffset = card.offset;
          // Enhanced bidirectional looping - reset far outside visible range
          if (position < -(cardSpacing * 3)) {
            // When card goes far left, move it to far right (outside visible area)
            newOffset = card.offset + cardSpacing * totalCards;
          }

          const currentPosition = newOffset - animationOffsetRef.current;
          const distanceFromCenter = Math.abs(currentPosition);

          // Calculate position index (which card number from center)
          const positionIndex = Math.abs(currentPosition / cardSpacing);

          // Smooth scaling based on distance
          const scaleFactor = Math.max(0, 1 - positionIndex / 4);
          const scale = 0.7 + scaleFactor * 0.5;
          const heightScale = 1 + scaleFactor * 0.1;

          // Show 6 cards: 2 left + center + 3 right (extended range for smooth slide-in)
          let opacity;
          if (positionIndex <= 4) {
            const fadeStart = 3.2;
            if (positionIndex <= fadeStart) {
              opacity = Math.max(0.8, 1.2 - positionIndex / 4);
            } else {
              // Gradual fade-in for incoming cards from right (smooth slide-in)
              const fadeProgress =
                (positionIndex - fadeStart) / (4 - fadeStart);
              opacity = Math.max(0, 1 - fadeProgress);
            }
          } else {
            opacity = 0;
          }

          const zIndex = Math.floor(scale * 100);

          return {
            ...card,
            offset: newOffset,
            currentPosition,
            scale,
            heightScale,
            opacity,
            zIndex,
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(updateCards);
    };

    animationFrameRef.current = requestAnimationFrame(updateCards);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cards.length, cardSpacing]);

  if (!destinations.length) return null;

  // Show loading state while images are loading
  if (!imagesLoaded) {
    return (
      <section className="py-24 bg-white overflow-hidden">
        <div className="text-center mb-20">
          <p className="text-orange-500 font-semibold mb-2">
            International Destination
          </p>
        </div>
        <div className="flex justify-center items-center h-[700px]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4 bg-white overflow-hidden">
      {/*  HEADER */}
      {/* <div className="text-center mb-12">
        <p className=" ">
          International Destination
        </p>
       
      </div> */}

      <div className="text-center mb-4 md:mb-6">
        <p className="text-xl md:text-2xl font-extrabold text-orange-500">
          International Destination
        </p>
      </div>
      {/*  CAROUSEL CONTAINER */}
      <div className="relative flex justify-center items-center overflow-hidden w-full h-[700px]">
        <div className="absolute inset-0" style={{ clipPath: "inset(0)" }}>
          {cards.map((card) => {
            const image = card.show_image?.[0] || card.title_image?.[0];

            return (
              <div
                key={card.id}
                className="absolute rounded-3xl overflow-hidden shadow-2xl left-1/2"
                style={{
                  width: "260px",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  transform: `translateX(${
                    card.currentPosition - 130
                  }px) translateY(-50%) scale(${card.scale}) scaleY(${
                    card.heightScale
                  })`,
                  top: "50%",
                  opacity: card.opacity,
                  zIndex: card.zIndex,
                  visibility: card.opacity > 0.05 ? "visible" : "hidden",
                  pointerEvents: card.opacity > 0.5 ? "auto" : "none",
                  transition: "none",
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  perspective: 1000,
                }}
              >
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleCardClick(card)}
                >
                  <img
                    src={image}
                    alt={card.destination_name}
                    className="w-full h-[430px] object-cover    "
                    loading="eager"
                    decoding="async"
                    style={{ pointerEvents: "none" }}
                  />

                  {/*  OVERLAY */}
                  <div className="absolute inset-0 bg-black/35 flex flex-col justify-end p-5">
                    <h3 className="self-center text-white text-lg font-semibold mb-3">
                      {card.destination_name}
                    </h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(card);
                      }}
                      className="self-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-1.5 text-sm rounded-full transition"
                    >
                      Package Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternationalPackage;
