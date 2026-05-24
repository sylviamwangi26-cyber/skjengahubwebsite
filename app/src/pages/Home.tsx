import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Camera, FileCheck, MapPin } from 'lucide-react';

const AnimatedText = ({ text }: { text: string }) => {
  // Simple counter for continuous delay
  let delay = 0;
  return (
    <div className="flex flex-wrap justify-center mt-2 mb-6 text-xl md:text-2xl font-bold text-constructionOrange tracking-wider">
      {text.split(' ').map((word, wordIndex) => (
        <div key={wordIndex} className="flex mr-2 md:mr-3">
          {word.split('').map((char, charIndex) => {
            const currentDelay = delay;
            delay += 0.1;
            return (
              <span
                key={charIndex}
                className="animate-letter"
                style={{ animationDelay: `${currentDelay}s` }}
              >
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-trustBlue py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Logo Overlay */}
        <div 
          className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(/icons.svg)' }}
        ></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-2 tracking-tight">
            SKS JENGA HUB
          </h1>
          <AnimatedText text="TURNING YOUR DREAM HOME INTO REALITY" />
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            We connect premium property owners with verified contractors, structural design firms, and regulatory approval experts. Build with absolute transparency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/verify" 
              className="w-full sm:w-auto bg-constructionOrange hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get Listed & Verified
            </Link>
            <Link 
              to="/escrow" 
              className="w-full sm:w-auto bg-transparent border-2 border-trustBlueLight text-white hover:bg-trustBlueLight px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              Learn Our Escrow Mechanics
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-archGray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-trustBlue mb-4">Platform Utility</h2>
            <div className="w-24 h-1 bg-constructionOrange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amberWarning opacity-5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="bg-blue-50 w-14 h-14 rounded flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-trustBlueLight" />
              </div>
              <h3 className="text-xl font-bold text-trustBlue mb-3">Fractionalized Milestone Escrow</h3>
              <p className="text-slate-600 leading-relaxed">
                Secure your payments. We show exactly how the 5% platform fee is split evenly across project phases. Contractors only get paid when verifiable milestones are met and approved.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-constructionOrange opacity-5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="bg-orange-50 w-14 h-14 rounded flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-constructionOrange" />
              </div>
              <h3 className="text-xl font-bold text-trustBlue mb-3">Visual Social Portfolios</h3>
              <p className="text-slate-600 leading-relaxed">
                A structured feed designed for construction. Contractors post site videos, progress photos, and updates in a LinkedIn/Facebook style feed to showcase continuous competence to premium clients.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-trustBlue opacity-5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="bg-slate-100 w-14 h-14 rounded flex items-center justify-center mb-6">
                <FileCheck className="h-8 w-8 text-trustBlue" />
              </div>
              <h3 className="text-xl font-bold text-trustBlue mb-3">Regulatory Clearance Pathways</h3>
              <p className="text-slate-600 leading-relaxed">
                Stop wasting time at the county offices. We provide dedicated pathways for County Permits, NCA Approvals, and NEMA Licenses straight from our integrated dashboard of regulatory experts.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-trustBlueLight opacity-5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="bg-blue-50 w-14 h-14 rounded flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-trustBlueLight" />
              </div>
              <h3 className="text-xl font-bold text-trustBlue mb-3">Top 10 Geo-Targeted Visibility</h3>
              <p className="text-slate-600 leading-relaxed">
                Secure localized lead flow. We prioritize premium county placements so you connect with clients building directly in your registered counties of operation across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
