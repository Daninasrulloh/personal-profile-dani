import React from "react";
import Hero from "../components/HeroSection";
import About from "../components/AboutSection";
import Skills from "../components/SkillsSection";
import Portfolio from "../components/PortfolioSection";
import Testimonials from "../components/TestimonialsSection";
import Contact from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home(){
    return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
    );
}
