import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "개인 사용자를 위한 필수 기능",
    features: ["월 5개 문서 생성", "기본 문법 검사", "이메일 지원"],
    buttonText: "시작하기",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "19",
    description: "전문적인 글쓰기가 필요한 분",
    features: ["무제한 문서 생성", "고급 AI 글쓰기 엔진", "실시간 우선 지원", "개발자 API 접근"],
    buttonText: "Pro 시작하기",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "49",
    description: "팀 단위 협업과 관리 기능",
    features: ["Pro 플랜의 모든 기능", "기업 전용 맞춤 AI 학습", "전담 매니저 배정", "SSO 통합 및 보안 관리"],
    buttonText: "문의하기",
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            합리적인 가격 플랜
          </h2>
          <div className="inline-flex items-center p-1 bg-slate-200/50 rounded-full">
            <button className="px-6 py-2 rounded-full bg-white shadow-sm text-sm font-medium text-slate-900">
              월간 결제
            </button>
            <button className="px-6 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              연간 결제 <span className="ml-1 text-xs text-brand-600 font-bold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl bg-white p-8 ${
                plan.isPopular
                  ? "border-2 border-brand-500 shadow-2xl scale-105 z-10"
                  : "border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    가장 인기
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.isPopular ? "text-brand-600" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
                {/* <p className="mt-3 text-sm text-slate-500">{plan.description}</p> */}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? "text-brand-500" : "text-slate-400"}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                  plan.isPopular
                    ? "bg-brand-500 text-white hover:bg-brand-600 shadow-md hover:shadow-brand-500/25"
                    : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
