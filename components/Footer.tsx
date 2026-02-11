
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-100 py-8 text-center text-slate-500 text-sm">
            <p>&copy; {currentYear} Ivie Theodora Omobude. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
