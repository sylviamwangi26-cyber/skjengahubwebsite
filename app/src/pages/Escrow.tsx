import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const Escrow = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <ShieldCheck className="h-16 w-16 text-trustBlueLight mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold text-trustBlue mb-4">Escrow Mechanics</h1>
        <p className="text-xl text-slate-600">How we secure funds and ensure milestone-based delivery.</p>
      </div>

      <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-trustBlue mb-6">The 5% Platform Fee Breakdown</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          At SK Jenga Hub, our escrow system ensures that clients only pay for completed work, and contractors are guaranteed payment upon milestone approval. Our 5% platform fee is transparently split across the project phases.
        </p>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-constructionOrange mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-800">Phase 1: Foundation (1.25%)</span>
              <p className="text-slate-500 text-sm mt-1">Funds are released when the structural foundation is completed and verified by an independent NCA inspector.</p>
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-constructionOrange mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-800">Phase 2: Walling & Roofing (1.25%)</span>
              <p className="text-slate-500 text-sm mt-1">Disbursed upon successful roofing, ensuring weather-proof structures before interior works begin.</p>
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-constructionOrange mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-800">Phase 3: Finishes & MEP (1.25%)</span>
              <p className="text-slate-500 text-sm mt-1">Mechanical, Electrical, and Plumbing alongside primary finishes are tested and approved.</p>
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="h-6 w-6 text-constructionOrange mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-800">Phase 4: Handover (1.25%)</span>
              <p className="text-slate-500 text-sm mt-1">Final walk-through, snag list resolution, and key handover.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Escrow;
