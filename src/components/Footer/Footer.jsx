"use client"

import "./Footer.css"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-top">
        <div className="footer-top-left">
          <motion.h1
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(270deg, #df7908 0%, #b415ff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Gaurav
          </motion.h1>
          <p>I am a Fullstack Developer from Lucknow Uttar Pradesh. </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            {/* Inline SVG for user icon */}
            <svg width="20" height="20" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradient-user" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#df7908" />
                  <stop offset="100%" stopColor="#b415ff" />
                </linearGradient>
              </defs>
              <path
                d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                stroke="url(#gradient-user)"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="12" cy="7" r="4" stroke="url(#gradient-user)" strokeWidth="2" fill="none" />
            </svg>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <motion.div className="footer-subscribe" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Subscribe
          </motion.div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@2024 Gaurav Pratap. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <div className="social-icons">
            <motion.a
              href="https://github.com/gaurav0031"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#da7c25" }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gaurav-pratap-singh-07b7a2257/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#b923e1" }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://x.com/Guarav0031"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#da7c25" }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/thakurr_gauravv/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#b923e1" }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
