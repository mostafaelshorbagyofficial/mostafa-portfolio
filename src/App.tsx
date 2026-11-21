import { useState, useCallback, lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SystemIntro from './components/SystemIntro';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import type { PillarId } from './data/portfolio';

const SixPillarsEcosystem = lazy(() => import('./components/SixPillarsEcosystem'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));
const ClientsSection = lazy(() => import('./components/ClientsSection'));
const Achievements = lazy(() => import('./components/Achievements'));
const OrganizationsSection = lazy(() => import('./components/OrganizationsSection'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

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
          <Suspense fallback={<div className="min-h-[320px]" aria-hidden="true" />}>
            <SixPillarsEcosystem
              onSelectPillarWork={(pillar) => setSelectedWorkPillar(pillar)}
            />
            <ProjectGallery externalFilter={selectedWorkPillar} />
            <ClientsSection />
            <Achievements />
            <OrganizationsSection />
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
