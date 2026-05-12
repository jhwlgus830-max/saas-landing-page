"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "무료 체험은 어떻게 진행되나요?",
    answer: "가입 후 14일 동안 Pro 플랜의 모든 기능을 무료로 체험하실 수 있습니다. 결제 정보 입력 없이 시작할 수 있으며, 체험 기간이 끝나면 자동으로 Free 플랜으로 전환됩니다.",
  },
  {
    question: "언제든지 구독을 취소할 수 있나요?",
    answer: "네, 구독은 언제든지 취소 가능합니다. 결제 주기가 끝날 때까지는 Pro 기능을 계속 사용하실 수 있으며, 이후에는 추가 결제 없이 Free 플랜으로 변경됩니다.",
  },
  {
    question: "제 데이터는 안전한가요?",
    answer: "고객님의 데이터 보안을 최우선으로 생각합니다. 모든 데이터는 엔드투엔드 암호화되어 저장되며, AI 학습에 동의하지 않은 고객의 데이터는 절대 학습 모델에 사용되지 않습니다.",
  },
  {
    question: "환불이 가능합니까?",
    answer: "결제 후 7일 이내, 서비스 이용 내역이 없는 경우에는 100% 환불이 가능합니다. 자세한 환불 규정은 고객센터를 통해 확인해 주세요.",
  },
  {
    question: "어떤 결제 수단을 지원하나요?",
    answer: "신용카드(Visa, MasterCard, Amex 등), 페이팔 등 다양한 글로벌 결제 수단을 지원하고 있습니다. 국내 전용 결제 수단도 곧 추가될 예정입니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">자주 묻는 질문</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-50 text-brand-600' : 'bg-slate-50 text-slate-400'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
