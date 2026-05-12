import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-50 via-white to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-8 border border-brand-100 shadow-sm animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
          WriteFlow 2.0 출시
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 text-balance mx-auto">
          AI와 함께 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-indigo-600">더 빠르게 더 잘</span> 쓰세요
        </h1>
        
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
          아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요. 
          창의적인 흐름을 방해하지 않는 인텔리전트 라이팅 어시스턴트.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#trial"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white transition-all bg-brand-500 rounded-full hover:bg-brand-600 shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5 group"
          >
            무료 체험 시작
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm"
          >
            <Play className="mr-2 w-4 h-4 text-slate-500" />
            데모 보기
          </Link>
        </div>
        
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200/50 bg-white/50 p-2 backdrop-blur-xl shadow-2xl ring-1 ring-slate-900/5">
          <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-video relative flex items-center justify-center">
            {/* Using a placeholder gradient for the UI mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
              <div className="h-12 border-b border-slate-200 flex items-center px-4 gap-2 bg-white/50">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex p-4 gap-4">
                <div className="w-64 bg-white rounded-lg shadow-sm border border-slate-200 hidden md:block"></div>
                <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
