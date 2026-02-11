
import React from 'react';
import Section from './Section';

const experiences = [
    {
        title: "Executive Administrative & Operations Support",
        company: "Remote",
        location: "Tel Aviv-Yafo, Israel",
        dates: "Feb 2025 - Present",
        duties: [
            "Developed structured documentation systems that reduced revision cycles by 30%.",
            "Manage executive documentation, reporting workflows, and cross-functional coordination.",
            "Maintain version control and digital document governance ensuring audit readiness."
        ],
        isCurrent: true
    },
    {
        title: "Legal Technology & Administrative Consultant (Remote)",
        company: "Inno Canyon Consulting",
        location: "Remote, Nigeria",
        dates: "Aug 2024 - Nov 2024",
        duties: [
            "Supported implementation of digital workflow systems improving document retrieval efficiency by 25%.",
            "Prepared executive research briefs and structured reports for strategic planning.",
            "Assisted remote teams with compliance documentation, reporting, and operational coordination."
        ],
        isCurrent: false
    },
    {
        title: "Executive & Administrative Operations Specialist",
        company: "Remote",
        location: "Nigeria",
        dates: "Apr 2023 - Oct 2024",
        duties: [
            "Managed executive calendars, coordinating 20+ weekly meetings across departments and stakeholders.",
            "Handled high-volume communications, scheduling logistics, and executive correspondence with precision.",
            "Prepared presentations, reports, and briefing materials with 100% on-time delivery.",
            "Organized digital records and operational workflows to improve information accessibility and response time.",
            "Maintained strict confidentiality while supporting executive decision-making processes."
        ],
        isCurrent: false
    },
    {
        title: "Senior Administrative & Case Operations Coordinator",
        company: "Christmac",
        location: "Benin City, Nigeria",
        dates: "Oct 2015 - Dec 2023",
        duties: [
            "Managed 100+ active files while coordinating schedules and operational priorities.",
            "Drafted and reviewed 500+ professional documents with high accuracy.",
            "Coordinated client communication pipelines for 200+ stakeholders."
        ],
        isCurrent: false
    },
    {
        title: "Lawyer",
        company: "Faithful Steward",
        location: "Nigeria",
        dates: "Jan 2023 – Oct 2023",
        duties: [
            "Drafted executive correspondence and supported compliance documentation.",
            "Coordinated sensitive communications and maintained strict confidentiality standards."
        ],
        isCurrent: false
    }
];

interface ExperienceItemProps {
    title: string;
    company: string;
    location: string;
    dates: string;
    duties: string[];
    isCurrent: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, location, dates, duties, isCurrent }) => {
    const borderColor = isCurrent ? 'border-blue-600' : 'border-slate-300';
    const textColor = isCurrent ? 'text-blue-600' : 'text-slate-500';

    return (
        <div className={`relative pl-6 ${borderColor} border-l-4`}>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className={`${textColor} font-semibold italic`}>{company}, {location} | {dates}</p>
            <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                {duties.map((duty, index) => (
                    <li key={index}>{duty}</li>
                ))}
            </ul>
        </div>
    );
};

const WorkExperience: React.FC = () => {
    return (
        <Section title="Work Experience">
            <div className="space-y-10">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </Section>
    );
};

export default WorkExperience;
