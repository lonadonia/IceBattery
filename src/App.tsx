/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Vision from './components/Vision';
import ValueProposition from './components/ValueProposition';
import Timeline from './components/Timeline';
import Reliability from './components/Reliability';
import TrustedBy from './components/TrustedBy';
import News from './components/News';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-pure-white selection:bg-primary-green selection:text-white">
      <Navbar />
      <main className="pb-[30vh] md:pb-[40vh]">
        <Hero />
        <Mission />
        <Vision />
        <ValueProposition />
        <Timeline />
        <Reliability />
        <TrustedBy />
        <News />
      </main>
      <Footer />
    </div>
  );
}

