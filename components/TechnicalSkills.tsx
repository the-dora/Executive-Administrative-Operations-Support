
import React from 'react';

const technicalSkills = {
    "Executive & Productivity Platforms": "Microsoft 365 (Advanced), Google Workspace, Adobe Acrobat, Nitro PDF, Zoom, Microsoft Teams, Slack, Virtual Meeting Platforms.",
    "Project & Workflow Management": "Trello, Asana, Notion, ClickUp, Monday.com, Airtable",
    "CRM & Business Systems": "Salesforce, HubSpot, PracticePanther, Clio, MyCase",
    "Document & Automation Tools": "DocuSign, OneTrust, Workflow Automation Systems, Digital Filing Systems",
    "Research & Information Systems": "Westlaw, LexisNexis, Data & Report Structuring Tools",
    "Administrative Operations": "Calendar Systems, Expense Tracking, Reporting Dashboards, Document Control, Process Standardization, Knowledge Management",
};

const TechnicalSkills: React.FC = () => {
    return (
        <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
             <h2 className="text-2xl font-bold border-b-2 border-slate-900 pb-2 mb-6">Technical Skills</h2>
            <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                    <div key={category}>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">{category}</h3>
                        <p className="text-slate-600">{skills}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalSkills;
