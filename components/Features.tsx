import { PenTool, CheckCircle, Sliders, Globe, LayoutTemplate, Users } from "lucide-react";

const features = [
  {
    icon: <PenTool className="w-6 h-6 text-brand-500" />,
    title: "AI 글쓰기 어시스턴트",
    description: "클릭 한 번으로 고품질의 콘텐츠를 즉시 생성합니다. 당신의 첫 문장을 완성해보세요.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
    title: "언제나 완벽한 문법",
    description: "실시간으로 문법과 맞춤법을 검사하여 신뢰도 높은 글을 작성하도록 돕습니다.",
  },
  {
    icon: <Sliders className="w-6 h-6 text-amber-500" />,
    title: "브랜드 목소리 조절",
    description: "당신의 브랜드가 가진 독특한 톤앤매너에 맞춰 AI의 말투를 자유롭게 설정하세요.",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    title: "50개 이상의 언어",
    description: "전 세계 독자를 위해 50개 이상의 다양한 언어로 자연스러운 현지화 작성이 가능합니다.",
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-emerald-500" />,
    title: "100+ 전문 템플릿",
    description: "블로그, 광고 문구, 이메일 등 바로 사용 가능한 100개 이상의 템플릿을 제공합니다.",
  },
  {
    icon: <Users className="w-6 h-6 text-rose-500" />,
    title: "실시간 공동 작업",
    description: "팀원들과 함께 실시간으로 문서를 편집하고 AI 제안을 공유하며 협업하세요.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            창의적인 글쓰기를 위한 최고의 기능
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-50 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
