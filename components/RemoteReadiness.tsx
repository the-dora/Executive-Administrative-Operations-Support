
import React from 'react';

const readinessItems = [
    { icon: "fas fa-desktop", text: "Dedicated quiet home office" },
    { icon: "fas fa-wifi", text: "Reliable high‑speed internet connection" },
    { icon: "fas fa-satellite-dish", text: "Backup internet available (mobile hotspot / secondary provider)" },
    { icon: "fas fa-battery-full", text: "Backup power supply (inverter and generator)" },
    { icon: "fas fa-clock", text: "Available to work Monday–Friday, Eastern Time schedule" }
];

const RemoteReadiness: React.FC = () => {
    return (
        <section className="bg-blue-900 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Remote Work Readiness</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {readinessItems.map((item, index) => (
                     <div key={index} className="flex items-center gap-3">
                        <i className={`${item.icon} w-5 text-center`}></i>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RemoteReadiness;
