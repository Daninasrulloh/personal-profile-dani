import React from "react";

const testimonials = [
    {id:1, name:'Client A', text:'Great work, timely delivery.'},
    {id:2, name:'Client B', text:'Very professional and skilled.'},
];

export default function TestimonialsSection(){
    return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map(t => (
            <div key={t.id} className="bg-white rounded-lg p-6 shadow-sm glass-card">
                <p className="text-gray-600 mb-4">“{t.text}”</p>
                <div className="text-sm font-semibold">{t.name}</div>
            </div>
        ))}
        </div>
        </div>
    </section>
    );
}
