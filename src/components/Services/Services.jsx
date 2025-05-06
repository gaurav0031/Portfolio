"use client"

import "./Services.css"
import services_data from "../../assets/services_data"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="services" id="services" ref={ref}>
      <motion.div
        className="services-title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My Services</h1>
        {/* Inline SVG for theme pattern */}
        <svg width="200" height="20" viewBox="0 0 200 20">
          <defs>
            <linearGradient id="gradient-theme-services" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#df7908" />
              <stop offset="100%" stopColor="#b415ff" />
            </linearGradient>
          </defs>
          <path d="M0 10 H200" stroke="url(#gradient-theme-services)" strokeWidth="2" strokeDasharray="1 3" />
          <path d="M20 5 H180" stroke="url(#gradient-theme-services)" strokeWidth="2" strokeDasharray="1 3" />
          <path d="M40 15 H160" stroke="url(#gradient-theme-services)" strokeWidth="2" strokeDasharray="1 3" />
        </svg>
      </motion.div>

      <div className="services-container">
        {services_data.map((services, index) => {
          return (
            <motion.div
              key={index}
              className="services-format"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(185, 35, 225, 0.3)",
                background: "linear-gradient(45deg, #3f0028, #582300)",
              }}
            >
              <h3>{services.s_no}</h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <motion.div
                className="services-readmore"
                whileHover={{ gap: "30px" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <p>Read More</p>
                {/* Inline SVG for arrow icon */}
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  <defs>
                    <linearGradient id="gradient-arrow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#df7908" />
                      <stop offset="100%" stopColor="#b415ff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="url(#gradient-arrow)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
