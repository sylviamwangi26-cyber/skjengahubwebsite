import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ChevronLeft, UploadCloud, AlertCircle } from 'lucide-react';

const Verify = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State (simplified for UI demonstration)
  const [formDataState, setFormDataState] = useState({
    ncaRegistered: 'no',
    overBudget: 'no',
    overTime: 'no'
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 10));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 10) {
      handleNext();
      return;
    }

    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    let message = "*New Contractor/Firm Verification Application* 🏗️\n\n";
    
    const entries = Array.from(data.entries());
    entries.forEach(([key, value]) => {
      if (value instanceof File) {
        if (value.name) {
           message += `*${key}:* (File attached separately)\n`;
        }
        return;
      }
      if (value && String(value).trim() !== '') {
        message += `*${key}:* ${value}\n`;
      }
    });

    message += "\n*Note:* Please attach all requested documents (ID, BORAQS, NCA, KRA PIN, etc.) directly in this WhatsApp chat.";

    // Simulate API call and redirect to WhatsApp
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(`https://wa.me/254700134177?text=${encodeURIComponent(message)}`, '_blank');
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="py-20 px-4 sm:px-6 flex items-center justify-center min-h-[70vh]">
        <div className="bg-white p-10 rounded-xl shadow-xl max-w-lg w-full text-center border-t-4 border-constructionOrange">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-trustBlue mb-4">Application Submitted</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Your details have been sent to our WhatsApp. Please ensure you attach any necessary documents in the chat. We are building trust and transparency in the construction industry!
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-trustBlue text-white px-6 py-3 rounded font-medium hover:bg-trustBlueLight transition-colors w-full"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-trustBlue mb-4">Contractor & Construction Firm Verification</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          This verification helps SKS Jenga Hub ensure that only qualified, transparent, and trustworthy contractors and construction firms are listed on the platform.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8 relative">
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-constructionOrange transition-all duration-300"
            style={{ width: `${(step / 10) * 100}%` }}
          ></div>
        </div>
        <p className="text-right text-xs text-slate-500 mt-2 font-medium">Step {step} of 10</p>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="p-4 sm:p-8">
            
            {/* STEP 1: Basic Information */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 1 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 1: Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                  <input name="Full Name" required={step === 1} type="text" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name *</label>
                  <input name="Company Name" required={step === 1} type="text" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" placeholder="Acme Construction Ltd" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                  <input name="Phone Number" required={step === 1} type="tel" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" placeholder="0712345678" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                  <input name="Email Address" required={step === 1} type="email" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" placeholder="info@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">County of Operation *</label>
                  <select name="County of Operation" required={step === 1} className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent">
                    <option value="">Select County</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kiambu">Kiambu</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Machakos">Machakos</option>
                    <option value="Uasin Gishu">Uasin Gishu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Town / Area of Operation *</label>
                  <input name="Town/Area" required={step === 1} type="text" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" placeholder="e.g., Westlands" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Office Address *</label>
                  <textarea name="Office Address" required={step === 1} className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" rows={2} placeholder="Building, Street, Town"></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Website / Social Media Links</label>
                  <input name="Website/Socials" type="text" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" placeholder="https://..." />
                </div>
              </div>
            </div>

            {/* STEP 2: Licensing */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 2 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 2: Licensing & Professional Verification</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Are you registered with NCA? *</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="NCA Registered" value="yes" onChange={(e) => setFormDataState({...formDataState, ncaRegistered: e.target.value})} className="text-trustBlue focus:ring-trustBlue" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="NCA Registered" value="no" defaultChecked onChange={(e) => setFormDataState({...formDataState, ncaRegistered: e.target.value})} className="text-trustBlue focus:ring-trustBlue" />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {formDataState.ncaRegistered === 'yes' && (
                  <div className="animate-in fade-in duration-300">
                    <label className="block text-sm font-medium text-slate-700 mb-1">NCA Registration Number *</label>
                    <input name="NCA Registration Number" required={step === 2 && formDataState.ncaRegistered === 'yes'} type="text" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" placeholder="NCA/..." />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contractor Category / Grade</label>
                  <select name="Contractor Grade" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent">
                    <option value="">Select Grade (If applicable)</option>
                    {['NCA 1', 'NCA 2', 'NCA 3', 'NCA 4', 'NCA 5', 'NCA 6', 'NCA 7', 'NCA 8'].map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Are you registered with EBK (Engineers Board of Kenya)? *</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2"><input type="radio" name="EBK Registered" value="yes" className="text-trustBlue focus:ring-trustBlue" /><span>Yes</span></label>
                    <label className="flex items-center space-x-2"><input type="radio" name="EBK Registered" value="no" defaultChecked className="text-trustBlue focus:ring-trustBlue" /><span>No</span></label>
                    <label className="flex items-center space-x-2"><input type="radio" name="EBK Registered" value="na" className="text-trustBlue focus:ring-trustBlue" /><span>Not Applicable</span></label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Are you registered with BORAQS (Board of Registration of Architects & Quantity Surveyors)? *</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2"><input type="radio" name="BORAQS Registered" value="yes" className="text-trustBlue focus:ring-trustBlue" /><span>Yes</span></label>
                    <label className="flex items-center space-x-2"><input type="radio" name="BORAQS Registered" value="no" defaultChecked className="text-trustBlue focus:ring-trustBlue" /><span>No</span></label>
                    <label className="flex items-center space-x-2"><input type="radio" name="BORAQS Registered" value="na" className="text-trustBlue focus:ring-trustBlue" /><span>Not Applicable</span></label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Do you assist clients with construction document approvals (county/NCA/permits/NEMA)? *</label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2"><input type="radio" name="Assists with Approvals" value="yes" className="text-trustBlue focus:ring-trustBlue" /><span>Yes</span></label>
                    <label className="flex items-center space-x-2"><input type="radio" name="Assists with Approvals" value="no" defaultChecked className="text-trustBlue focus:ring-trustBlue" /><span>No</span></label>
                    <label className="flex items-center space-x-2"><input type="radio" name="Assists with Approvals" value="sometimes" className="text-trustBlue focus:ring-trustBlue" /><span>Sometimes</span></label>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3: Company Legal Documents */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 3 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 3: Company Legal Documents</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'Certificate of Incorporation *', name: 'Doc_Incorporation' },
                  { label: 'KRA PIN Certificate *', name: 'Doc_KRAPIN' },
                  { label: 'Business Permit *', name: 'Doc_Permit' },
                  { label: 'CR12 (Optional)', name: 'Doc_CR12' },
                  { label: 'BORAQS Certificate (If applicable)', name: 'Doc_BORAQS' }
                ].map((doc, idx) => (
                  <div key={idx} className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group relative">
                    <UploadCloud className="h-10 w-10 text-slate-400 group-hover:text-trustBlue mb-2" />
                    <span className="text-sm font-medium text-slate-700 text-center">{doc.label}</span>
                    <span className="text-xs text-slate-400 mt-1">PDF, JPG, PNG up to 5MB</span>
                    <input type="file" name={doc.name} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 4: Identity Verification */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 4 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 4: Identity Verification</h2>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-10 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group max-w-md mx-auto relative">
                <UploadCloud className="h-12 w-12 text-slate-400 group-hover:text-trustBlue mb-3" />
                <span className="text-base font-medium text-slate-700 text-center">Upload National ID or Passport *</span>
                <span className="text-sm text-slate-400 mt-2">Clear copy of Front and Back</span>
                <input type="file" name="Doc_NationalID" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              </div>
            </div>

            {/* STEP 5: Experience */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 5 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 5: Experience & Project History</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">How many construction projects have you completed? *</label>
                  <input name="Projects Completed" required={step === 5} type="number" min="0" className="w-full sm:max-w-xs border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" placeholder="e.g. 15" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Have you ever gone over budget on a project? *</label>
                  <div className="flex space-x-6">
                    {['yes', 'no', 'sometimes'].map(val => (
                      <label key={val} className="flex items-center space-x-2">
                        <input type="radio" name="Gone Over Budget" value={val} onChange={(e) => setFormDataState({...formDataState, overBudget: e.target.value})} className="text-trustBlue" />
                        <span className="capitalize">{val}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {(formDataState.overBudget === 'yes' || formDataState.overBudget === 'sometimes') && (
                  <div className="animate-in fade-in duration-300">
                    <label className="block text-sm font-medium text-slate-700 mb-1">If yes, explain why</label>
                    <textarea name="Over Budget Reason" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" rows={3}></textarea>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Have you ever exceeded project timelines or milestones? *</label>
                  <div className="flex space-x-6">
                    {['yes', 'no', 'sometimes'].map(val => (
                      <label key={val} className="flex items-center space-x-2">
                        <input type="radio" name="Exceeded Timelines" value={val} onChange={(e) => setFormDataState({...formDataState, overTime: e.target.value})} className="text-trustBlue" />
                        <span className="capitalize">{val}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {(formDataState.overTime === 'yes' || formDataState.overTime === 'sometimes') && (
                  <div className="animate-in fade-in duration-300">
                    <label className="block text-sm font-medium text-slate-700 mb-1">If yes, explain why</label>
                    <textarea name="Over Time Reason" className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" rows={3}></textarea>
                  </div>
                )}
              </div>
            </div>

            {/* STEP 6: Estimation Table */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 6 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 6: Typical Projects & Estimated Costs</h2>
              <div className="overflow-x-auto rounded border border-slate-200">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-700 font-semibold uppercase text-xs">
                    <tr>
                      <th className="px-4 sm:px-6 py-3">Project Type</th>
                      <th className="px-4 sm:px-6 py-3">Estimated Cost Range (KES)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="px-4 sm:px-6 py-4">2 Bedroom House</td>
                      <td className="px-4 sm:px-6 py-4"><input name="Cost_2Bed" type="text" defaultValue="3M – 7M" className="bg-transparent border-b border-transparent focus:border-trustBlue outline-none w-full" /></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 sm:px-6 py-4">3 Bedroom House</td>
                      <td className="px-4 sm:px-6 py-4"><input name="Cost_3Bed" type="text" defaultValue="5M – 12M" className="bg-transparent border-b border-transparent focus:border-trustBlue outline-none w-full" /></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 sm:px-6 py-4">4 Bedroom House</td>
                      <td className="px-4 sm:px-6 py-4"><input name="Cost_4Bed" type="text" defaultValue="8M – 20M" className="bg-transparent border-b border-transparent focus:border-trustBlue outline-none w-full" /></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 sm:px-6 py-4">Apartment Block</td>
                      <td className="px-4 sm:px-6 py-4"><input name="Cost_Apt" type="text" defaultValue="20M+" className="bg-transparent border-b border-transparent focus:border-trustBlue outline-none w-full" /></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 sm:px-6 py-4">Commercial Building</td>
                      <td className="px-4 sm:px-6 py-4"><input name="Cost_Commercial" type="text" defaultValue="Varies" className="bg-transparent border-b border-transparent focus:border-trustBlue outline-none w-full" /></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 sm:px-6 py-4">Other</td>
                      <td className="px-4 sm:px-6 py-4">
                        <input name="Cost_Other" type="text" className="border-b border-slate-300 focus:border-trustBlue outline-none bg-transparent w-full" placeholder="Enter custom type and range" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center text-amber-600 text-sm bg-amber-50 p-3 rounded">
                <AlertCircle className="h-4 w-4 mr-2" />
                This helps us match you with clients having realistic budgets.
              </div>
            </div>

            {/* STEP 7: Portfolio */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 7 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 7: Portfolio</h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Portfolio Links *</label>
                <textarea name="Portfolio Links" required={step === 7} className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" rows={3} placeholder="Paste links to your previous work (Google Drive, website, Instagram, TikTok, or any online portfolio)."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Describe 1–3 of your best completed projects *</label>
                <textarea name="Best Projects Description" required={step === 7} className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" rows={6} placeholder="Include: location, cost, duration, materials used, challenges faced..."></textarea>
              </div>
            </div>

            {/* STEP 8: Services */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 8 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 8: Services Offered</h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">What services do you offer? (Select all that apply) *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {['Residential Construction', 'Commercial Construction', 'Renovation', 'Interior Design', 'Plumbing', 'Electrical', 'Roofing', 'Architectural Design', 'Quantity Surveying', 'Project Management', 'Landscaping', 'Masonry', 'Welding & Steel Works', 'Other'].map(service => (
                    <label key={service} className="flex items-center space-x-2 bg-slate-50 p-2 rounded border border-slate-200 hover:border-trustBlue cursor-pointer">
                      <input type="checkbox" name={`Service_${service}`} value="yes" className="rounded text-trustBlue focus:ring-trustBlue" />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 mt-6">Years of Experience *</label>
                <select name="Years of Experience" required={step === 8} className="w-full sm:max-w-xs border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent">
                  <option value="">Select Experience</option>
                  <option value="0-2">0–2 years</option>
                  <option value="3-5">3–5 years</option>
                  <option value="5-10">5–10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            {/* STEP 9: Location */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 9 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 9: Location Coverage</h2>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Counties You Operate In *</label>
                <p className="text-xs text-slate-500 mb-2">List all the counties you are capable of delivering projects in.</p>
                <textarea name="Counties Operated In" required={step === 9} className="w-full border border-slate-300 rounded p-2.5 focus:ring-2 focus:ring-trustBlue focus:border-transparent" rows={4} placeholder="e.g., Nairobi, Kiambu, Machakos, Kajiado..."></textarea>
              </div>
            </div>

            {/* STEP 10: Agreement */}
            <div className={`space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 ${step === 10 ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-bold text-trustBlue border-b pb-2">Section 10: Platform Agreement & Submit</h2>
              <div className="space-y-4 bg-slate-50 p-6 rounded border border-slate-200">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input name="Agreement_Truth" value="agreed" required={step === 10} type="checkbox" className="mt-1 rounded text-constructionOrange focus:ring-constructionOrange w-5 h-5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900">
                    <strong>Declaration:</strong> I confirm that: All information provided is true, all documents are valid, I understand false information leads to rejection, and I agree to SKS Jenga Hub verification rules.
                  </span>
                </label>
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input name="Agreement_Display" value="agreed" required={step === 10} type="checkbox" className="mt-1 rounded text-constructionOrange focus:ring-constructionOrange w-5 h-5 flex-shrink-0" />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900">
                    <strong>Consent to Display Profile:</strong> I allow SKS Jenga Hub to display my verified profile, portfolio links, ratings and reviews, and my verification badge.
                  </span>
                </label>
              </div>
            </div>

          </div>

          {/* Form Actions */}
          <div className="bg-slate-50 px-4 sm:px-8 py-4 border-t border-slate-200 flex justify-between items-center">
            <button
              type="button"
              onClick={handlePrev}
              disabled={step === 1 || isSubmitting}
              className={`flex items-center px-4 py-2 rounded font-medium transition-colors ${step === 1 ? 'text-slate-400 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-200'}`}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Back
            </button>
            
            {step < 10 ? (
              <button
                type="submit"
                className="flex items-center bg-trustBlue text-white px-6 py-2 rounded font-medium hover:bg-trustBlueLight transition-colors shadow-sm"
              >
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center bg-constructionOrange text-white px-4 sm:px-8 py-2.5 rounded font-bold hover:bg-orange-600 transition-all shadow-md disabled:opacity-70 disabled:cursor-wait text-sm sm:text-base whitespace-nowrap"
              >
                {isSubmitting ? 'Processing...' : 'Submit via WhatsApp'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;

