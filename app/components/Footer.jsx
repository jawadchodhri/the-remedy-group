import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, MessageCircle, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#0284C7] flex items-center justify-center text-white font-bold text-lg">
                TRG
              </div>
              <span className="text-xl font-bold text-white">The Remedy Group</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Your trusted partner in US healthcare Revenue Cycle Management (RCM), medical coding, and aggressive A/R recovery.
            </p>
            <div className="inline-flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-md text-xs text-cyan-400 border border-slate-700">
              <Shield className="w-4 h-4" /> HIPAA Compliant
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-cyan-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-cyan-400">Our Services</Link></li>
              <li><Link href="/#software" className="hover:text-cyan-400">EHR Systems</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400">Contact & Free Audit</Link></li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Core Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Full Revenue Cycle Management</li>
              <li>ICD-10 & CPT Medical Coding</li>
              <li>Denial & Rejection Fixation</li>
              <li>Accounts Receivable (A/R) Clean-up</li>
              <li>Eligibility & Benefits Verification</li>
              <li>Practice Billing Audits</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+923224035095" className="hover:text-white">+92 322 4035095</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/923224035095" target="_blank" rel="noreferrer" className="hover:text-white">
                  WhatsApp Direct
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:mj28015@gmail.com" className="hover:text-white">mj28015@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="https://www.linkedin.com/in/muhammad-jawad-85332b202/" target="_blank" rel="noreferrer" className="hover:text-white">
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Lahore, Pakistan (Serving US Practices)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {currentYear} The Remedy Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}