import React from "react";
import ProfileCard from "./ProfileCard";

export default function HeroSection(){
    return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero">
        <div className="max-w-6xl w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* left: text */}
            <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-lg text-primary font-semibold mb-2 animate-fade-up">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 animate-fade-up">Muchammad Dani Nasrulloh — <span className="text-primary">Frontend Developer</span></h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-6 animate-fade-up">
                I build modern, responsive, and accessible front-end apps using React and Tailwind. I love turning designs into real interactive experiences.
            </p>
            <div className="flex justify-center md:justify-start gap-3 animate-fade-up">
                <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:brightness-95 transition">Contact Me</a>
                <a href="#portfolio" className="px-6 py-3 bg-white border rounded-lg">See Portfolio</a>
            </div>
            <div className="mt-8 flex justify-center md:justify-start gap-4 animate-fade-up">
                <div className="text-center">
                <div className="text-2xl font-semibold text-gray-900">5+</div>
                <div className="text-sm text-gray-500">Years</div>
                </div>
                <div className="text-center">
                <div className="text-2xl font-semibold text-gray-900">20+</div>
                <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                <div className="text-2xl font-semibold text-gray-900">10</div>
                <div className="text-sm text-gray-500">Clients</div>
                </div>
            </div>
            </div>

          {/* right: profile card */}
            <div className="md:col-span-1 flex justify-center md:justify-end">
            <ProfileCard />
            </div>
        </div>
        </div>
    </section>
    );
}
