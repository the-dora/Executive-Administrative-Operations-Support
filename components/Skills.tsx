
import React from 'react';
import Section from './Section';

const skills = [
    "Executive Calendar & Travel Management",
    "Strategic Scheduling & Meeting Coordination",
    "Executive Briefing & Presentation Preparation",
    "Stakeholder Communication & Liaison Support",
    "Confidential Information Management",
    "Workflow Design & Process Optimization",
    "Cross-Functional Project Coordination",
    "Board & Leadership Meeting Support",
    "Digital Document Governance",
    "Remote Office Operations",
    "Task Prioritization & Deadline Management",
    "Operational Reporting & Data Organization",
];

const Skills: React.FC = () => {
    return (
        <Section title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <i className="fas fa-check-circle text-blue-600 mt-1"></i>
                        <span>{skill}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
