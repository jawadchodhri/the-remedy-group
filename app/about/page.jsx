import Link from "next/link";
import { Award, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] bg-blue-100/70 px-3 py-1 rounded-full">
            Our Story & Leadership
          </span>
          <h1 className="text-4xl font-extrabold text-[#0A2540] mt-3">About The Remedy Group</h1>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Delivering precision medical billing, strict HIPAA compliance, and data-driven revenue growth for US healthcare providers.
          </p>
        </div>

        {/* Lead Specialist Profile Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-md mb-4 border border-emerald-200">
              <Award className="w-4 h-4" /> Lead RCM Specialist & Founder
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-2">Jawad</h2>
            <p className="text-sm font-semibold text-[#0284C7] mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Bachelors of Computer Science, Virtual University
            </p>
            <p className="text-sm font-semibold text-[#0284C7] mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Associate Degree in Commerce, Punjab University
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              With 4+ years of specialized experience in US healthcare revenue cycle management, Muhammad Jawad has led RCM teams across leading healthcare BPO firms (Ascend BPO, Physician Revenue Group, and HQ Analytics).
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              His expertise spans full-cycle billing, aggressive denial resolution, proactive practice audits, and managing multi-specialty practices across EHR platforms including eClinicalWorks, NextGen, Kareo/Tebra, AdvancedMD, Office Ally, and MDLand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% HIPAA Compliance Regulations</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Proactive Denial & Rejection Management</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Accurate ICD-10 & CPT Code Scrubbing</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Weekly & Monthly Practice Financial Analytics</div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-[#0A2540] mb-2">1. Precision & Accuracy</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every claim is scrubbed before submission to eliminate coding mismatches and reduce first-pass rejection rates below 2%.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-[#0A2540] mb-2">2. Rapid Turnaround</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Claims submitted within 24–48 hours of service and instant action taken on denials to maintain steady practice cash flow.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-[#0A2540] mb-2">3. Total Transparency</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No hidden fees or black boxes. You receive weekly collection dashboards and aging A/R reports directly.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0F4C81] hover:bg-[#0A2540] text-white font-bold px-8 py-4 rounded-xl shadow transition-all"
          >
            Partner With Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}