"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Banner */}
      <div className="bg-[#0A2540] text-slate-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>100% HIPAA Compliant US Medical Billing Services</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a href="tel:+923224035095" className="flex items-center gap-1 hover:text-cyan-400">
              <Phone className="w-3.5 h-3.5" /> +92 322 4035095
            </a>
            <a href="mailto:mj28015@gmail.com" className="flex items-center gap-1 hover:text-cyan-400">
              <Mail className="w-3.5 h-3.5" /> mj28015@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="The Remedy Group Logo"
              width={48}
              height={48}
              className="rounded-lg object-contain"
              priority
            />
            <div>
              <span className="text-xl font-black text-[#0A2540] tracking-tight block">The Remedy Group</span>
              <span className="text-xs text-slate-500 font-medium tracking-wide block">Medical Billing & RCM</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-[#0F4C81] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-[#0F4C81] transition-colors">
              About Us
            </Link>
            <Link href="/#services" className="text-sm font-semibold text-slate-700 hover:text-[#0F4C81] transition-colors">
              Services
            </Link>
            <Link href="/#software" className="text-sm font-semibold text-slate-700 hover:text-[#0F4C81] transition-colors">
              EHR Platforms
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-[#0F4C81] transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#0F4C81] hover:bg-[#0A2540] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md transition-all hover:-translate-y-0.5"
            >
              Get Free Audit
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-base font-semibold text-slate-700">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-base font-semibold text-slate-700">
            About Us
          </Link>
          <Link href="/#services" onClick={() => setIsOpen(false)} className="block py-2 text-base font-semibold text-slate-700">
            Services
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-base font-semibold text-slate-700">
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#0F4C81] text-white py-3 rounded-lg font-semibold"
          >
            Get Free Audit
          </Link>
        </div>
      )}
    </header>
  );
}