"use client"

import "./About.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const skillVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: { duration: 1, ease: "easeOut" },
    }),
  }

  return (
    <div className="about" id="about" ref={ref}>
      <motion.div
        className="about-title"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <h1>About Me</h1>
        {/* Inline SVG for theme pattern */}
        <svg width="200" height="20" viewBox="0 0 200 20">
          <defs>
            <linearGradient id="gradient-theme-about" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#df7908" />
              <stop offset="100%" stopColor="#b415ff" />
            </linearGradient>
          </defs>
          <path d="M0 10 H200" stroke="url(#gradient-theme-about)" strokeWidth="2" strokeDasharray="1 3" />
          <path d="M20 5 H180" stroke="url(#gradient-theme-about)" strokeWidth="2" strokeDasharray="1 3" />
          <path d="M40 15 H160" stroke="url(#gradient-theme-about)" strokeWidth="2" strokeDasharray="1 3" />
        </svg>
      </motion.div>

      <div className="about-section">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.img
            className="img"
            src="/gps.jpeg?height=400&width=400"
            alt="Gaurav Pratap Singh"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
        </motion.div>

        <div className="about-right">
          <motion.div
            className="about-para"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p>
              I am a motivated and enthusiastic Full Stack Developer with a strong foundation in web development
              technologies. I am eager to apply my skills, learn from industry experts, and contribute to the success
              and growth of the organization I join.
            </p>
            <p>
              My passion for Fullstack Development is not only reflected in my extensive experience but I also bring it
              in my each projects too and I want to invest it in real life projects also.
            </p>
          </motion.div>

          <motion.div
            className="about-skills"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div className="about-skill" initial="hidden" animate={inView ? "visible" : "hidden"} custom={90}>
              <p>HTML</p>
              <motion.hr variants={skillVariants} custom={90} />
            </motion.div>

            <motion.div className="about-skill" initial="hidden" animate={inView ? "visible" : "hidden"} custom={80}>
              <p>CSS</p>
              <motion.hr variants={skillVariants} custom={80} />
            </motion.div>

            <motion.div className="about-skill" initial="hidden" animate={inView ? "visible" : "hidden"} custom={60}>
              <p>JAVASCRIPT</p>
              <motion.hr variants={skillVariants} custom={60} />
            </motion.div>

            <motion.div className="about-skill" initial="hidden" animate={inView ? "visible" : "hidden"} custom={70}>
              <p>TAILWIND</p>
              <motion.hr variants={skillVariants} custom={70} />
            </motion.div>

            <motion.div className="about-skill" initial="hidden" animate={inView ? "visible" : "hidden"} custom={80}>
              <p>REACT JS</p>
              <motion.hr variants={skillVariants} custom={80} />
            </motion.div>

            <motion.div className="about-skill" initial="hidden" animate={inView ? "visible" : "hidden"} custom={50}>
              <p>NODE JS</p>
              <motion.hr variants={skillVariants} custom={50} />
            </motion.div>

            <motion.div className="about-skill" initial="hidden" animate={inView ? "visible" : "hidden"} custom={40}>
              <p>JAVA</p>
              <motion.hr variants={skillVariants} custom={40} />
            </motion.div>

            <motion.div className="about-skill" initial="hidden" animate={inView ? "visible" : "hidden"} custom={30}>
              <p>PYTHON</p>
              <motion.hr variants={skillVariants} custom={30} />
            </motion.div>

            <motion.div className="about-skill" initial="hidden" animate={inView ? "visible" : "hidden"} custom={50}>
              <p>SQL</p>
              <motion.hr variants={skillVariants} custom={50} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="about-achivements"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <motion.div
          className="about-achivement"
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h1>0.6</h1>
          <p>YEARS OF EXPERIENCE</p>
        </motion.div>
        <hr />
        <motion.div
          className="about-achivement"
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h1>3+</h1>
          <p>PROJECTS COMPLETED</p>
        </motion.div>
        <hr />
        <motion.div
          className="about-achivement"
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <h1>5+</h1>
          <p>CERTIFICATE</p>
        </motion.div>
        <hr />
      </motion.div>
    </div>
  )
}

export default About
