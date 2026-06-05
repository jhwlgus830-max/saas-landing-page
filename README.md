# WriteFlow - AI 글쓰기 어시스턴트 랜딩 페이지

WriteFlow는 인공지능 기반의 지능형 라이팅 어시스턴트를 위한 모던 SaaS 랜딩 페이지입니다. Next.js 16 (App Router)과 Tailwind CSS v4를 기반으로 구축되었으며, 깔끔하고 전문적인 디자인과 부드러운 상호작용(Micro-animations)을 특징으로 합니다.

## 🌐 라이브 데모 (배포 링크)

배포된 사이트는 아래 링크에서 확인하실 수 있습니다:
**[https://saas-landing-page-sigma-blue.vercel.app/](https://saas-landing-page-sigma-blue.vercel.app/)**

## 🚀 주요 특징

- **최신 기술 스택**: 최신 Next.js 16 프레임워크와 App Router를 활용하여 빠르고 안정적인 성능을 제공합니다.
- **아름다운 UI/UX**: Tailwind CSS v4를 통해 SaaS 제품에 어울리는 프리미엄 디자인과 가독성 높은 레이아웃을 구현했습니다.
- **마이크로 애니메이션**: 자연스러운 호버 효과와 전환(Transition) 애니메이션으로 생동감 있는 사용자 경험을 제공합니다.
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 등 모든 디바이스에 최적화된 레이아웃을 지원합니다.
- **SEO 최적화**: 시맨틱 HTML 태그 및 메타데이터를 적용하여 검색 엔진 접근성을 높였습니다.

## 🛠️ 기술 스택

- **프레임워크**: [Next.js 16](https://nextjs.org/)
- **스타일링**: [Tailwind CSS v4](https://tailwindcss.com/)
- **아이콘**: [Lucide React](https://lucide.dev/)
- **폰트**: [Inter](https://fonts.google.com/specimen/Inter) (via `next/font/google`)
- **언어**: TypeScript

## 📂 프로젝트 구조

주요 컴포넌트들은 기능별로 모듈화되어 구성되었습니다:

- `/components/Header.tsx`: 내비게이션 바 및 상단 로고
- `/components/Hero.tsx`: 메인 카피와 제품 목업을 보여주는 최상단 영역
- `/components/Features.tsx`: 서비스의 주요 기능을 소개하는 3x2 그리드
- `/components/Pricing.tsx`: 구독 요금제 (Pro 플랜 강조)
- `/components/FAQ.tsx`: 사용자들이 자주 묻는 질문(아코디언 UI)
- `/components/CTA.tsx`: 최종적인 서비스 가입을 유도하는 하단 영역
- `/components/Footer.tsx`: 사이트 하단 정보 및 링크

