import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-trustBlue text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <HardHat className="h-6 w-6 text-white" />
              <span className="font-bold text-xl text-white tracking-tight">SK Jenga Hub</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              The Trust Infrastructure for Kenyan Construction. We connect premium property owners with verified contractors, structural design firms, and regulatory approval experts.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/verify" className="hover:text-white transition-colors">Get Verified</Link></li>
              <li><Link to="/escrow" className="hover:text-white transition-colors">Escrow Mechanics</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Verification Badges</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700 text-sm text-center text-slate-500">
          <p className="mb-2">
            All user-submitted information is legally processed under the Kenya Data Protection Act. Platform consultation parameters apply.
          </p>
          <p>&copy; {new Date().getFullYear()} SK Jenga Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
