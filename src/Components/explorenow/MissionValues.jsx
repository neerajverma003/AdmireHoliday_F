import React, { useEffect } from 'react';
import { CheckCircle, Heart, Shield, Globe, Leaf, Users, Sparkles } from 'lucide-react';
import { motion, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MissionValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      animate(
        ".mission-word",
        { opacity: 1, y: 0 },
        { delay: 0.1, duration: 0.8, ease: "backOut" }
      );
    }
  }, [inView]);

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const floatCard = {
    rest: { y: 0 },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const colors = {
    primary: "#0d9488",
    secondary: "#7c3aed",
    accent: "#f59e0b",
    lightBg: "#f0fdfa",
    darkText: "#1e293b",
    Red: "#D14954",
    Teal: "#CEE3E1",
    Orange: "#EA580C",
    Gold: "#CDA163",
    Burgundy: "#A31D1A",
  };

  const getRGBA = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${opacity})`;
  };

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.lightBg} 0%, white 100%)`,
      }}
    >
      {/* Background Emojis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.15 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
              y: [0, 50 * (i % 3 === 0 ? 1 : -1)],
              rotate: [0, 180],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute text-7xl"
            style={{
              left: `${10 + i * 10}%`,
              top: `${10 + i * 7}%`,
              color: i % 2 === 0 ? colors.primary : colors.secondary,
            }}
          >
            {i % 3 === 0 ? "✈️" : "🌴"}
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-8 leading-tight"
              style={{ color: colors.darkText }}
            >
              Our{" "}
              <span
                className="mission-word inline-block opacity-0 translate-y-10"
                style={{ color: colors.primary }}
              >
                Mission
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl mb-8 leading-relaxed"
              style={{ color: colors.darkText }}
            >
              We create{" "}
              <span
                className="font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                }}
              >
                transformative journeys
              </span>{" "}
              that change perspectives, support communities, and celebrate
              diversity.
            </motion.p>

            <div className="space-y-5">
              {[
                {
                  icon: <Leaf className="w-6 h-6" />,
                  text: "Sustainable tourism practices",
                  color: colors.primary,
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  text: "Direct local community support",
                  color: colors.Burgundy,
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  text: "Unforgettable memories",
                  color: colors.Gold,
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  text: "Exceptional personal service",
                  color: colors.Orange,
                },
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.5 + idx * 0.15 },
                        }
                      : {}
                  }
                  whileHover="hover"
                  variants={floatCard}
                  className="flex items-center p-5 rounded-xl bg-white shadow-sm hover:shadow-md border border-gray-100"
                >
                  <motion.div
                    variants={glowVariants}
                    animate={inView ? "visible" : "hidden"}
                    className="p-3 rounded-full mr-4"
                    style={{
                      backgroundColor: getRGBA(point.color, 0.2),
                      color: point.color,
                    }}
                  >
                    {point.icon}
                  </motion.div>
                  <span className="font-medium" style={{ color: colors.darkText }}>
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, rotateY: 15 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    rotateY: 0,
                    transition: { delay: 0.3, duration: 1 },
                  }
                : {}
            }
            whileHover={{
              y: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            className="bg-white p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-gray-100"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-purple-500 to-amber-400"
            />

            <h3 className="text-3xl font-bold mb-10 text-center">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                  WebkitBackgroundClip: "text",
                }}
              >
                Our Core Values
              </span>
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Passion",
                  desc: "We love what we do, and it shines through in every adventure we plan.",
                  color: colors.Red,
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Integrity",
                  desc: "We operate with trust, honesty, and full transparency at all times.",
                  color: colors.primary,
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Respect",
                  desc: "We honor the cultures and environments we visit through sustainable tourism.",
                  color: colors.secondary,
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.7 + idx * 0.2 },
                        }
                      : {}
                  }
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 10px 25px -5px ${value.color}40`,
                  }}
                  className="flex items-start p-6 rounded-xl bg-white border border-gray-100"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: idx * 0.3,
                      },
                    }}
                    className="flex-shrink-0 p-3 rounded-full mr-4"
                    style={{
                      backgroundColor: getRGBA(value.color, 0.2),
                      color: value.color,
                    }}
                  >
                    {value.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg mb-2" style={{ color: value.color }}>
                      {value.title}
                    </h4>
                    <p className="text-gray-600">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * Math.sin(i)],
              y: [0, 100 * Math.cos(i)],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute rounded-full"
            style={{
              width: `${5 + (i % 3)}px`,
              height: `${5 + (i % 3)}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: [colors.primary, colors.secondary, colors.accent][i % 3],
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default MissionValues;
