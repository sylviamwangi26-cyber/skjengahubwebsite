import React from 'react';

const Terms = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-trustBlue mb-8">Legal & Privacy</h1>
      
      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Terms of Service</h2>
        <p className="text-slate-600 mb-6">
          By accessing and using SK Jenga Hub, you agree to comply with our platform regulations, quality standards, and code of conduct. We reserve the right to verify all submitted credentials.
        </p>
        
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Privacy Policy & Data Protection</h2>
        <p className="text-slate-600 mb-6">
          All user-submitted information is legally processed under the Kenya Data Protection Act. We only collect necessary information to facilitate secure construction contracts, regulatory approvals, and escrow milestones. Your identification and corporate documents are stored securely and never sold to third parties.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4">Verification & Platform Rules</h2>
        <p className="text-slate-600 mb-6">
          SK Jenga Hub employs rigorous checks. Submitting false documents, including forged KRA PINs, CR12s, or NCA Certificates, will lead to immediate and permanent platform bans. Legal action may be pursued in severe cases of fraud.
        </p>
      </div>
    </div>
  );
};

export default Terms;
