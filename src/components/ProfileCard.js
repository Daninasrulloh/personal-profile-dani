import React from "react";
import profile from "../assets/images/profile.jpg"; 

export default function ProfileCard(){
    return (
    <div className="glass-card rounded-2xl w-80 p-6 text-center transform transition hover:-translate-y-2">
        <div className="relative -mt-16">
        <div className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-sm overflow-hidden">
            <img src={profile} alt="profile" className="w-full h-full object-cover"/>
        </div>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-gray-900">Muchammad Dani Nasrulloh</h3>
        <p className="text-sm text-gray-500 mt-1">Frontend Developer • React</p>
        <div className="mt-4 flex justify-center gap-3">
        <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-md">Contact</a>
        <a href="#portfolio" className="px-4 py-2 border rounded-md">Portfolio</a>
        </div>
    </div>
    );
}
