"use client"

import "./MyWork.css"
import mywork_data from "../../assets/mywork_data"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const MyWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <div className="mywork" id="work" ref={ref}>
      <motion.div
        className="mywork-title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My Latest Work</h1>
        {/* Inline SVG for theme pattern */}
        <svg width="200" height="20" viewBox="0 0 200 20">
          <defs>
            <linearGradient id="gradient-theme-work" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#df7908" />
              <stop offset="100%" stopColor="#b415ff" />
            </linearGradient>
          </defs>
          <path d="M0 10 H200" stroke="url(#gradient-theme-work)" strokeWidth="2" strokeDasharray="1 3" />
          <path d="M20 5 H180" stroke="url(#gradient-theme-work)" strokeWidth="2" strokeDasharray="1 3" />
          <path d="M40 15 H160" stroke="url(#gradient-theme-work)" strokeWidth="2" strokeDasharray="1 3" />
        </svg>
      </motion.div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-image-container">
                <img src={work.w_img || "/placeholder.svg"} alt={work.w_name} />

                {hoveredProject === index && (
                  <motion.div
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>{work.w_name}</h3>
                    <p>{work.w_desc}</p>
                    <div className="project-tech">
                      {work.w_tech.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                    <motion.button
                      className="view-project-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(work.w_link, "_blank")}
                    >
                      View Project
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        className="mywork-showmore"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ gap: "30px" }}
        onClick={() => window.open("https://github.com/gaurav0031", "_blank")}
      >
        <p>View More on GitHub</p>
        {/* Inline SVG for arrow icon */}
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <defs>
            <linearGradient id="gradient-arrow-work" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#df7908" />
              <stop offset="100%" stopColor="#b415ff" />
            </linearGradient>
          </defs>
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="url(#gradient-arrow-work)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default MyWork
