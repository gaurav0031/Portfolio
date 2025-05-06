"use client"

import Navbar from "../src/components/Navbar/Navbar"
import About from "../src/components/About/About"
import Services from "../src/components/Services/Services"
import MyWork from "../src/components/MyWork/MyWork"
import Contact from "../src/components/Contact/Contact"
import Footer from "../src/components/Footer/Footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <div id="home" style={{ height: "80px" }}></div>
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </main>
  )
}
