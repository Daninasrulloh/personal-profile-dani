import React from "react";
import p1 from "../assets/images/portfolio1.png";
import p2 from "../assets/images/portfolio2.png";
import p3 from "../assets/images/portfolio3.png";

const items = [
    {id:1, title:'Front End Developer', img:p1, desc:'Interactive Web Dashboard UI'},
    {id:2, title:'Mobile App Landing', img:p2, desc:'Creative Landing Page Design'},
    {id:3, title:'Creative Design Collection', img:p3, desc:'Professional Illustration Series'},
];

export default function PortfolioSection(){
    return (
    <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(i => (
            <div key={i.id} className="rounded-xl overflow-hidden shadow-sm transform transition hover:scale-105">
                <img src={i.img} alt={i.title} className="w-full h-48 object-cover"/>
                <div className="p-4 bg-white">
                <h3 className="font-semibold mb-1">{i.title}</h3>
                <p className="text-sm text-gray-500">{i.desc}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
    );
}
