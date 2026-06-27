import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
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
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
        <Stats />
        <Services />
        <ColombiaMap />
        <Projects />
        <Commitment />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}
