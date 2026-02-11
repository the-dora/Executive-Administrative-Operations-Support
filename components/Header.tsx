
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-slate-900 text-white py-16 px-6 shadow-lg">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Ivie Theodora Omobude</h1>
                <p className="text-xl text-slate-300 font-light mb-6 tracking-wide uppercase">Executive Administrative & Operations Support</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="flex items-center gap-2"><i className="fas fa-envelope"></i> ivietheodora.omobude@gmail.com</span>
                    <span className="flex items-center gap-2"><i className="fas fa-phone"></i> +14378378395</span>
                    <span className="flex items-center gap-2"><i className="fas fa-map-marker-alt"></i> Remote | Available Full-Time</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
