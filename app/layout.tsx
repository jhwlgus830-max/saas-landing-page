import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WriteFlow - AI 글쓰기 어시스턴트",
  description: "아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요. 창의적인 흐름을 방해하지 않는 인텔리전트 라이팅 어시스턴트.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
