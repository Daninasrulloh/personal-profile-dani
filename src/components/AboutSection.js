import React from "react";
import profile from "../assets/images/profile.jpg";

export default function AboutSection(){
    return (
    <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8 animate-fade-up">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 flex justify-center">
            <img src={profile} alt="me" className="w-56 h-56 rounded-2xl object-cover shadow-lg"/>
            </div>
            <div className="md:col-span-2">
            <p className="text-gray-600 text-lg leading-relaxed mb-4 animate-fade-up">
                I'm a frontend developer with a passion for building beautiful and performant web applications. I focus on React, Tailwind CSS and clean code.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                <li><strong>Location:</strong> Kediri, Indonesia</li>
                <li><strong>Email:</strong> muchammaddani.23065@mhs.unesa.ac.id</li>
                <li><strong>Works at:</strong>Freelance</li>
                <li><strong>Languages:</strong> EN, ID</li>
            </ul>
            <div className="mt-6">
                <a href="#contact" className="px-5 py-3 bg-primary text-white rounded-lg shadow hover:brightness-95 transition">Let's Work</a>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
}
