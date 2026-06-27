import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import BlueprintGrid from './components/ui/BlueprintGrid';
import WhatsAppButton from './components/ui/WhatsAppButton';
import TechDivider from './components/ui/TechDivider';
import SectionSkeleton from './components/ui/SectionSkeleton';

const About = lazy(() => import('./components/sections/About'));
const Stats = lazy(() => import('./components/sections/Stats'));
const Services = lazy(() => import('./components/sections/Services'));
const ColombiaMap = lazy(() => import('./components/map/ColombiaMap'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Commitment = lazy(() => import('./components/sections/Commitment'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

export default function App() {
  return (
    <>
      <BlueprintGrid />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhatsAppButton />
        <Suspense fallback={<SectionSkeleton />}>
          <TechDivider section="SEC-01" label="QUIÉNES SOMOS" coord="LAT 4.4389° N" />
          <About />
          <Stats />
          <TechDivider section="SEC-02" label="VERTICALES" coord="INGENIERÍA INTEGRAL" />
          <Services />
          <TechDivider section="SEC-03" label="COBERTURA" coord="16+ DEPARTAMENTOS" />
          <ColombiaMap />
          <TechDivider section="SEC-04" label="TRAYECTORIA" coord="40+ PROYECTOS" />
          <Projects />
          <TechDivider section="SEC-05" label="COMPROMISO" coord="ISO 9001:2015" />
          <Commitment />
          <TechDivider section="SEC-06" label="CONTACTO" coord="IBAGUÉ, COL" />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
