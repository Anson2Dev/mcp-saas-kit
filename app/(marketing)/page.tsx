/**
 * 首页组件
 * 网站的主页，展示产品特点和主要功能
 * 包含英雄区域、功能展示和常见问题
 */
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Database } from "lucide-react";
import { Terminal } from "@/components/Terminal";
import { Hero } from "@/components/landing/hero";
import { FAQ } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";

/**
 * 首页组件
 * 展示网站的主要内容和营销信息
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <FAQ />
    </main>
  );
}
