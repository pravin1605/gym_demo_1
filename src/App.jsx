import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Trainers from "./sections/Trainers";
import Membership from "./sections/Membership";

import DigitalExperience from "./sections/DigitalExperience";
import MemberExperience from "./sections/MemberExperience";
import SmartAutomation from "./sections/SmartAutomation";
import LeadManagement from "./sections/LeadManagement";

import CRM from "./sections/CRM";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";

import CTA from "./sections/CTA";
import FinalCTA from "./sections/FinalCTA";

import Footer from "./sections/Footer";

function App() {
  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <Navbar />

      {/* =========================
          MAIN WEBSITE
      ========================== */}
      <main>

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Training Programs */}
        <Programs />

        {/* Trainers */}
        <Trainers />

        {/* Membership Plans */}
        <Membership />

        {/* Digital Gym Dashboard */}
        <DigitalExperience />

        {/* Member Experience */}
        <MemberExperience />

        {/* Smart Automation */}
        <SmartAutomation />

        {/* Lead Management */}
        <LeadManagement />

        {/* CRM */}
        <CRM />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA */}
        <CTA />

        {/* Final CTA */}
        <FinalCTA />

      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </>
  );
}

export default App;