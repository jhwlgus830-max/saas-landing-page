export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-brand-600 shadow-2xl">
        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,0 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-400 opacity-20 blur-3xl"></div>

        <div className="relative px-6 py-20 text-center md:px-12 lg:px-16 lg:py-24">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            글쓰기를 혁신할 준비가 되셨나요?
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-100 mb-10">
            10,000명 이상의 작가와 함께 WriteFlow의 지능형 어시스턴트 효과를 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 text-base font-bold text-brand-600 bg-white rounded-full hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              무료 체험 시작
            </button>
          </div>
          <p className="mt-6 text-sm text-brand-200">
            신용카드 필요 없음 · 14일 무료 체험
          </p>
        </div>
      </div>
    </section>
  );
}
