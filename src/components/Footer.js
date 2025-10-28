import React from "react";

export default function Footer(){
    return (
    <footer className="py-6 bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Muchammad Dani Nasrulloh
        </div>
    </footer>
    );
}
