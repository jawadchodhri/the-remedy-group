"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, Linkedin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    practice: "",
    email: "",
    phone: "",
    specialty: "",
    software: "eClinicalWorks",
    service: "Full RCM",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `*Medical Billing Consultation Request*\nName: ${formData.name}\nPractice: ${formData.practice}\nSpecialty: ${formData.specialty}\nSoftware: ${formData.software}\nService: ${formData.service}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nNotes: ${formData.notes}`
  );

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] bg-blue-100/70 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold text-[#0A2540] mt-3">Book Your Free Billing Consultation</h1>
          <p className="text-slate-600 mt-2 text-sm">
            Fill out the form below or connect directly via WhatsApp or Email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-[#0A2540] text-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-1">Jawad</h3>
              <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider mb-6">
                Medical Billing Specialist & RCM Lead
              </p>

              <div className="space-y-4 text-sm text-slate-300">
                <a
                  href="https://wa.me/923224035095"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp</div>
                    <div className="font-semibold text-white">+92 322 4035095</div>
                  </div>
                </a>

                <a
                  href="mailto:mj28015@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-xs text-slate-400">Email</div>
                    <div className="font-semibold text-white">mj28015@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-jawad-85332b202/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn Profile</div>
                    <div className="font-semibold text-white">Muhammad Jawad</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Available during US Working Hours (EST / CST / PST)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A2540] mb-2">Thank You, {formData.name}!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Your inquiry has been generated. To connect with Jawad immediately, click below to open WhatsApp:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/923224035095?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-sm shadow hover:bg-[#1EBE5D]"
                  >
                    Send via WhatsApp
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl text-sm font-semibold"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] uppercase mb-1">Your Name *</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                      placeholder="Dr. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] uppercase mb-1">Practice / Clinic Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                      placeholder="Apex Medical Group"
                      value={formData.practice}
                      onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] uppercase mb-1">Email Address *</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                      placeholder="doctor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] uppercase mb-1">Phone / WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] uppercase mb-1">Medical Specialty</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                      placeholder="e.g. Internal Medicine, Cardiology"
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] uppercase mb-1">EHR / Software</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white"
                      value={formData.software}
                      onChange={(e) => setFormData({ ...formData, software: e.target.value })}
                    >
                      <option value="eClinicalWorks">eClinicalWorks (eCW)</option>
                      <option value="Kareo / Tebra">Kareo / Tebra</option>
                      <option value="NextGen">NextGen</option>
                      <option value="AdvancedMD">AdvancedMD</option>
                      <option value="Office Ally">Office Ally</option>
                      <option value="MDLand">MDLand</option>
                      <option value="EMDs">EMDs</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] uppercase mb-1">Service Needed</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Full RCM">Complete Revenue Cycle Management (RCM)</option>
                    <option value="Denial & Rejection Recovery">Denial & Rejection Recovery</option>
                    <option value="Medical Coding & Scrubbing">Medical Coding (CPT/ICD-10)</option>
                    <option value="Free Practice Billing Audit">Free Practice Billing Audit</option>
                    <option value="Eligibility Verification">Eligibility & Benefits Verification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] uppercase mb-1">Notes / Monthly Volume</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#0F4C81] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                    placeholder="Tell us about your billing challenges, practice size, or aging A/R..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F4C81] hover:bg-[#0A2540] text-white py-4 rounded-xl font-bold text-base shadow-lg transition-all"
                >
                  Submit Inquiry & Request Free Audit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}