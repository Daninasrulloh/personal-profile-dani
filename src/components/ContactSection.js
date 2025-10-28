import React from "react";

export default function ContactSection(){
    return (
    <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Contact Me</h2>
        <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-6 shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 border rounded-md" placeholder="Your name" />
            <input className="p-3 border rounded-md" placeholder="Email" />
            <input className="p-3 border rounded-md md:col-span-2" placeholder="Subject" />
            <textarea className="p-3 border rounded-md md:col-span-2" rows="5" placeholder="Message"></textarea>
            <div className="md:col-span-2 flex justify-end">
                <button type="button" className="px-6 py-3 bg-primary text-white rounded-md">Send Message</button>
            </div>
            </form>
        </div>
        </div>
    </section>
    );
}
