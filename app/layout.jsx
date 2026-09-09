import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import FloatingWhatsApp from "../app/components/FloatingWhatsApp";

export const metadata = {
  title: "The Remedy Group | Medical Billing & Revenue Cycle Management",
  description:
    "Professional US medical billing services, CPT/ICD-10 coding, denial management, and accounts receivable recovery led by Jawad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}