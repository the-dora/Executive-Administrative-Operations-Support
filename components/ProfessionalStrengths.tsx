
import React from 'react';
import Section from './Section';

const strengths = [
    "Highly organized and detail-driven",
    "Executive-level communication and discretion",
    "Strong decision-support mindset",
    "Proactive problem solver",
    "Process improvement oriented",
    "Adaptable to fast-paced environments",
    "Reliable remote work discipline",
    "Technology-forward and systems-focused",
];

const ProfessionalStrengths: React.FC = () => {
    return (
        <Section title="Professional Strengths">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                 {strengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-100 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-md">
                        <i className="fas fa-star text-blue-600 mt-1"></i>
                        <span className="font-medium">{strength}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ProfessionalStrengths;
