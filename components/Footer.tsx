import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-slate-900">
              WriteFlow
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Cookie Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Contact Us</Link>
          </nav>
        </div>
        
        <div className="pt-8 border-t border-slate-200/60 text-center md:text-left">
          <p className="text-sm text-slate-400">
            © 2024 WriteFlow AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
