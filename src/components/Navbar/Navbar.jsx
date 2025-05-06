"use client"
import { useState, useEffect } from "react"
import "./navbar.css"
import { motion } from "framer-motion"

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem)
    const element = document.getElementById(menuItem)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="gaurav"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <h1 className="navbar1">GAURAV</h1>
      </motion.div>
      <div>
        <ul className="nav-menu">
          <motion.li whileHover={{ scale: 1.1 }} onClick={() => handleMenuClick("home")}>
            <p>Home</p>
            {menu === "home" ? (
              <svg width="100%" height="5" viewBox="0 0 100 5">
                <defs>
                  <linearGradient id="gradient-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#df7908" />
                    <stop offset="100%" stopColor="#b415ff" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="5" rx="2.5" fill="url(#gradient-underline)" />
              </svg>
            ) : (
              <></>
            )}
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} onClick={() => handleMenuClick("about")}>
            <p>About Me</p>
            {menu === "about" ? (
              <svg width="100%" height="5" viewBox="0 0 100 5">
                <rect width="100%" height="5" rx="2.5" fill="url(#gradient-underline)" />
              </svg>
            ) : (
              <></>
            )}
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} onClick={() => handleMenuClick("services")}>
            <p>Services</p>
            {menu === "services" ? (
              <svg width="100%" height="5" viewBox="0 0 100 5">
                <rect width="100%" height="5" rx="2.5" fill="url(#gradient-underline)" />
              </svg>
            ) : (
              <></>
            )}
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} onClick={() => handleMenuClick("work")}>
            <p>Portfolio</p>
            {menu === "work" ? (
              <svg width="100%" height="5" viewBox="0 0 100 5">
                <rect width="100%" height="5" rx="2.5" fill="url(#gradient-underline)" />
              </svg>
            ) : (
              <></>
            )}
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} onClick={() => handleMenuClick("contact")}>
            <p>Contact</p>
            {menu === "contact" ? (
              <svg width="100%" height="5" viewBox="0 0 100 5">
                <rect width="100%" height="5" rx="2.5" fill="url(#gradient-underline)" />
              </svg>
            ) : (
              <></>
            )}
          </motion.li>
        </ul>
      </div>
      <motion.div
        className="nav-connect"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleMenuClick("contact")}
      >
        Connect With Me
      </motion.div>
    </motion.div>
  )
}

export default Navbar
