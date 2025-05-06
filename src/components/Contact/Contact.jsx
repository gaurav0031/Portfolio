"use client"

import "./contact.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="contact" id="contact" ref={ref}>
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Get In Touch</h1>
        {/* Inline SVG for theme pattern */}
        <svg width="200" height="20" viewBox="0 0 200 20">
          <defs>
            <linearGradient id="gradient-theme" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#df7908" />
              <stop offset="100%" stopColor="#b415ff" />
            </linearGradient>
          </defs>
          <path d="M0 10 H200" stroke="url(#gradient-theme)" strokeWidth="2" strokeDasharray="1 3" />
          <path d="M20 5 H180" stroke="url(#gradient-theme)" strokeWidth="2" strokeDasharray="1 3" />
          <path d="M40 15 H160" stroke="url(#gradient-theme)" strokeWidth="2" strokeDasharray="1 3" />
        </svg>
      </motion.div>

      <div className="contact-section1">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to join a company to work on new projects, so feel free to send me a message about
            anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <motion.div
              className="contact-detail"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {/* Inline SVG for mail icon */}
              <svg width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradient-mail" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#df7908" />
                    <stop offset="100%" stopColor="#b415ff" />
                  </linearGradient>
                </defs>
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  stroke="url(#gradient-mail)"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M2 7l10 7 10-7" stroke="url(#gradient-mail)" strokeWidth="2" fill="none" />
              </svg>
              <p>gauravpratap2631@gmail.com</p>
            </motion.div>
            <motion.div
              className="contact-detail"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {/* Inline SVG for call icon */}
              <svg width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradient-call" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#df7908" />
                    <stop offset="100%" stopColor="#b415ff" />
                  </linearGradient>
                </defs>
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="url(#gradient-call)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <p>+91-9565152960</p>
            </motion.div>
            <motion.div
              className="contact-detail"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {/* Inline SVG for location icon */}
              <svg width="24" height="24" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradient-location" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#df7908" />
                    <stop offset="100%" stopColor="#b415ff" />
                  </linearGradient>
                </defs>
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke="url(#gradient-location)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="12" cy="10" r="3" stroke="url(#gradient-location)" strokeWidth="2" fill="none" />
              </svg>
              <p>Lucknow, Uttar Pradesh</p>
            </motion.div>
          </div>
        </motion.div>
        <br />
        <br />
        <motion.form
          className="contact-right"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Your Name</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            whileFocus={{ borderColor: "#b923e1", boxShadow: "0 0 10px rgba(185, 35, 225, 0.5)" }}
          />

          <label htmlFor="email">Your Email</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ borderColor: "#b923e1", boxShadow: "0 0 10px rgba(185, 35, 225, 0.5)" }}
          />

          <label htmlFor="message">Write Your Message Here</label>
          <motion.textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ borderColor: "#b923e1", boxShadow: "0 0 10px rgba(185, 35, 225, 0.5)" }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="contact-submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </motion.button>

          {submitSuccess && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
