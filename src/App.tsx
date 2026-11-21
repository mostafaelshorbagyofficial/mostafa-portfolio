import { useState, useCallback } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SystemIntro from './components/SystemIntro';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SixPillarsEcosystem from './components/SixPillarsEcosystem';
import ProjectGallery from './components/ProjectGallery';
import ClientsSection from './components/ClientsSection';
import Achievements from './components/Achievements';
import OrganizationsSection from './components/OrganizationsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { PillarId } from './data/portfolio';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [selectedWorkPillar, setSelectedWorkPillar] = useState<PillarId | 'all'>('all');

  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen relative">
        {!introComplete && <SystemIntro onComplete={handleIntroComplete} />}

        <Navigation />

        <main>
          <HeroSection />
          <AboutSection />
          <SixPillarsEcosystem
            onSelectPillarWork={(pillar) => setSelectedWorkPillar(pillar)}
          />
          <ProjectGallery externalFilter={selectedWorkPillar} />
          <ClientsSection />
          <Achievements />
          <OrganizationsSection />
          <Contact />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}
