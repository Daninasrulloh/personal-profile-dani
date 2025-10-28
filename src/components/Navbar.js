import React from "react";

export default function Navbar(){
    return (
    <nav className="fixed w-full top-0 z-50">
        <div className="backdrop-blur bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold">PP</div>
            <span className="font-semibold text-gray-800">Profile</span>
            </div>

            <ul className="hidden md:flex gap-8 items-center text-sm text-gray-700">
            <li><a href="#home" className="hover:text-primary transition">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition">About</a></li>
            <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
            <li><a href="#portfolio" className="hover:text-primary transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>

            <div className="hidden md:block">
            <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-lg shadow-sm hover:brightness-95 transition">Hire Me</a>
            </div>

          {/* mobile menu stub */}
            <div className="md:hidden">
            <button className="p-2 rounded-md bg-white/60 border">☰</button>
            </div>
        </div>
        </div>
    </nav>
    );
}
