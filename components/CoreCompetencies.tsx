
import React from 'react';
import Section from './Section';

const competencies = [
    { icon: "fas fa-calendar-check", text: "Calendar Management" },
    { icon: "fas fa-project-diagram", text: "Workflow Optimization" },
    { icon: "fas fa-shield-alt", text: "Confidentiality Expert" },
    { icon: "fas fa-globe", text: "Remote Operations" },
    { icon: "fas fa-file-invoice", text: "Executive Reporting" },
    { icon: "fas fa-users", text: "Stakeholder Liaison" },
];

interface CompetencyItemProps {
    icon: string;
    text: string;
}

const CompetencyItem: React.FC<CompetencyItemProps> = ({ icon, text }) => {
    return (
        <div className="p-3 bg-slate-100 rounded-lg flex items-center gap-3 transition-all duration-300 hover:bg-blue-100 hover:shadow-md">
            <i className={`${icon} text-blue-600 w-6 text-center`}></i>
            <span className="font-medium">{text}</span>
        </div>
    );
};

const CoreCompetencies: React.FC = () => {
    return (
        <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mb-6">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {competencies.map((comp, index) => (
                    <CompetencyItem key={index} {...comp} />
                ))}
            </div>
        </section>
    );
};

export default CoreCompetencies;
