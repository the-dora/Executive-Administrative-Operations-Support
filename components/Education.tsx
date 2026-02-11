
import React from 'react';
import Section from './Section';

const education = [
    { title: "Legal Assistant Certificate", institution: "" },
    { title: "Paralegal Certificate", institution: "" },
    { title: "Virtual Assistant", institution: "Udemy" },
    { title: "Barrister at Law (B.L.)", institution: "Nigerian Law School, Lagos State, Nigeria" },
    { title: "Bachelor of Law (B.L.)", institution: "Igbinedion University, Okada, Nigeria" },
];

const Education: React.FC = () => {
    return (
        <Section title="Education & Certifications">
            <div className="space-y-4">
                {education.map((edu, index) => (
                    <div key={index} className="pl-4 border-l-2 border-slate-200">
                        <h3 className="text-lg font-semibold">{edu.title}</h3>
                        {edu.institution && <p className="text-slate-600 italic">{edu.institution}</p>}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
