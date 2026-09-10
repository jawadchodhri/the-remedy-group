import Link from "next/link";
import {
  FileCheck,
  TrendingUp,
  AlertCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Award,
  Layers,
  HelpCircle,
  FileSearch,
  Zap,
} from "lucide-react";

export default function Home() {
  const stats = [
    { number: "4+ Years", label: "US Healthcare Billing Experience" },
    { number: "98%+", label: "First-Pass Clean Claim Rate" },
    { number: "24-48h", label: "Turnaround on Claim Submissions" },
    { number: "100%", label: "HIPAA Compliant & Secure" },
  ];

  const services = [
    {
      icon: <Layers className="w-8 h-8 text-[#0F4C81]" />,
      title: "End-to-End RCM Management",
      desc: "Complete lifecycle management from patient registration and verification to claim generation and final reimbursement.",
      points: ["Patient demographics entry", "Charge entry & scrubbing", "Payment posting (ERA/EOB)"],
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#0F4C81]" />,
      title: "Medical Coding (ICD-10 & CPT)",
      desc: "Accurate coding mapped to guidelines to prevent audits, compliance fines, and front-end claim rejections.",
      points: ["CPT, ICD-10-CM & HCPCS coding", "Modifier application", "Pre-submission error scrubbing"],
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-[#0F4C81]" />,
      title: "Denial Management & Rejections",
      desc: "Systematic root-cause analysis on denied claims, fast rejection fixation, and filing aggressive appeals with payers.",
      points: ["Same-day rejection fixation", "Appeals with medical necessity docs", "Payer denial trend tracking"],
    },
    {
      icon: <Clock className="w-8 h-8 text-[#0F4C81]" />,
      title: "Aging A/R Recovery (30/60/90+ Days)",
      desc: "Aggressive follow-up on stalled, pending, or underpaid claims to recover every dollar owed to your medical practice.",
      points: ["Dedicated payer phone follow-ups", "Old A/R backlog clean-up", "Timely filing limit tracking"],
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#0F4C81]" />,
      title: "Eligibility & Benefits Verification",
      desc: "Verify patient insurance coverage, deductibles, copays, and prior authorizations before appointments to avoid denials.",
      points: ["Active coverage checks", "Co-pay & coinsurance calculations", "Prior authorization assistance"],
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0F4C81]" />,
      title: "Practice Billing Audits & Analytics",
      desc: "Deep-dive audits into your billing workflows to uncover revenue leakage and provide insightful weekly/monthly financial reports.",
      points: ["Comprehensive RCM audit", "Revenue leakage detection", "Transparent executive reporting"],
    },
  ];

  const softwareList = [
    "eClinicalWorks (eCW)",
    "Kareo / Tebra",
    "NextGen",
    "AdvancedMD",
    "Office Ally / Practice Mate",
    "MDLand",
    "EMDs",
  ];

  const auditSteps = [
    {
      title: "1. Share 5 Denied Claims",
      desc: "Send us 5 sample denied claims or an aging A/R report (redacted for HIPAA).",
    },
    {
      title: "2. Deep Coding & Root-Cause Review",
      desc: "We analyze CPT/ICD-10 codes, payer remark codes, and timely filing limits.",
    },
    {
      title: "3. Actionable Recovery Blueprint",
      desc: "Within 48 hours, receive a step-by-step report showing how to recover those funds and stop future denials.",
    },
  ];

  const faqs = [
    {
      q: "What is the Free 5-Claim Denial Audit?",
      a: "It is a 100% complimentary, zero-obligation review. You provide 5 sample rejected or unpaid claims, and we analyze the exact root cause, payer guidelines, and provide a clear recovery strategy.",
    },
    {
      q: "What EHR / EMR systems do you work with?",
      a: "We have extensive hands-on experience with eClinicalWorks, Kareo/Tebra, NextGen, AdvancedMD, Office Ally, MDLand, and EMDs, and can easily adapt to any other billing software.",
    },
    {
      q: "How do you ensure HIPAA compliance?",
      a: "We adhere strictly to HIPAA guidelines, utilizing encrypted communication, secure VPN access, and strict role-based data handling protocols.",
    },
    {
      q: "How quickly will we see an improvement in our collections?",
      a: "Most practices notice a sharp reduction in claim rejections within the first 14–30 days and significant recovery of aging A/R within 60 days.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F0F7FD] to-white pt-20 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#0F4C81] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4 text-cyan-600" /> Professional US Medical Billing Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A2540] tracking-tight leading-tight mb-6">
              Maximize Reimbursements. <span className="text-[#0284C7]">Slash Claim Denials.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Stop losing revenue to billing errors and delayed claims. The Remedy Group delivers end-to-end Revenue Cycle Management (RCM), proactive denial resolution, and A/R recovery for US healthcare practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#0F4C81] hover:bg-[#0A2540] text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Claim Free 5-Claim Denial Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/923224035095"
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-50 text-[#0A2540] border-2 border-slate-300 px-8 py-4 rounded-xl text-base font-bold transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="bg-[#0A2540] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="p-2">
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1">{s.number}</div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ NEW: Featured No-Risk 5-Claim Audit Box ⭐ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0F4C81] to-[#0A2540] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Zap className="w-3.5 h-3.5" /> 100% Free • Zero Obligation
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                The Zero-Risk 5-Claim Denial & A/R Audit
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Not sure why certain claims keep getting rejected? Send us 5 sample denied claims. We will analyze the root cause, identify revenue leakage, and provide a clear recovery plan — completely free of charge.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {auditSteps.map((step, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10">
                    <h3 className="font-bold text-base text-cyan-300 mb-1">{step.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#0A2540] font-extrabold px-8 py-3.5 rounded-xl text-sm shadow-lg transition-all hover:scale-105"
              >
                Request Your Free 5-Claim Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] bg-blue-100/70 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] mt-3">Comprehensive Billing & RCM Solutions</h2>
            <p className="text-slate-600 mt-4 text-base">
              Tailored services designed to optimize cash flow and relieve your staff of billing headaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{srv.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{srv.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {srv.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="text-sm font-bold text-[#0F4C81] hover:text-[#0284C7] flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EHR Software Supported */}
      <section id="software" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-3">
            <Database className="w-4 h-4" /> System Compatibility
          </div>
          <h2 className="text-3xl font-extrabold text-[#0A2540] mb-4">Proficient in Top Industry EHR & Billing Systems</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm mb-12">
            We integrate seamlessly into your current software with zero disruption to your daily patient schedule.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {softwareList.map((sw, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 hover:border-[#0F4C81] px-6 py-3.5 rounded-xl font-bold text-slate-800 text-sm shadow-sm transition-all hover:bg-blue-50"
              >
                {sw}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0A2540]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-[#0A2540] flex items-center gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-[#0284C7] shrink-0" /> {faq.q}
                </h3>
                <p className="text-sm text-slate-600 pl-7 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#0A2540] to-[#0F4C81] text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to Recover Stalled Claim Revenue?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-base">
            Request your free 5-claim denial audit today and discover how much revenue your practice is leaving on the table.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0A2540] font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Claim Free 5-Claim Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}