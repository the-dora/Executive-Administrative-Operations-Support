
import React from 'react';
import Header from './components/Header';
import ExecutiveSummary from './components/ExecutiveSummary';
import WorkExperience from './components/WorkExperience';
import CoreCompetencies from './components/CoreCompetencies';
import Skills from './components/Skills';
import TechnicalSkills from './components/TechnicalSkills';
import ProfessionalStrengths from './components/ProfessionalStrengths';
import Education from './components/Education';
import RemoteReadiness from './components/RemoteReadiness';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main className="max-w-5xl mx-auto p-6 md:p-12 space-y-16">
                <ExecutiveSummary />
                <WorkExperience />
                <CoreCompetencies />
                <Skills />
                <TechnicalSkills />
                <ProfessionalStrengths />
                <Education />
                <RemoteReadiness />
            </main>
            <Footer />
        </>
    );
};

export default App;
