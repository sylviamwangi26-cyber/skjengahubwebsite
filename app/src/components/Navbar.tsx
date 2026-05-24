import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HardHat } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-trustBlue p-2 rounded">
                <HardHat className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-trustBlue tracking-tight">SKS JENGA HUB</span>
            </Link>
            <div className="hidden md:flex items-center bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              <ShieldCheck className="h-4 w-4 text-trustBlueLight mr-1" />
              <span className="text-xs font-semibold text-trustBlueLight">NCA-Verification Engine</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-trustBlue font-medium transition-colors">Home</Link>
            <Link to="/escrow" className="text-slate-600 hover:text-trustBlue font-medium transition-colors">Escrow</Link>
            <Link to="/terms" className="text-slate-600 hover:text-trustBlue font-medium transition-colors">Legal</Link>
          </div>
          
          <div className="flex items-center">
            <Link 
              to="/verify" 
              className="bg-constructionOrange hover:bg-orange-600 text-white px-5 py-2.5 rounded font-semibold transition-all shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <span>Verify Now</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
