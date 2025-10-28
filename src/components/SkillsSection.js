import React from "react";

const skills = [
    {name:'React', level:90},
    {name:'Tailwind', level:86},
    {name:'JavaScript', level:88},
    {name:'HTML & CSS', level:95},
];

export default function SkillsSection(){
    return (
    <section id="skills" className="py-20 bg-gradient-to-r from-indigo-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map(s => (
            <div key={s.name} className="bg-white rounded-lg p-5 shadow-sm glass-card animate-fade-up">
                <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">{s.name}</h3>
                <span className="text-sm text-gray-500">{s.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{width:`${s.level}%`, background: 'linear-gradient(90deg,#7C3AED,#06B6D4)'}}/>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
    );
}
