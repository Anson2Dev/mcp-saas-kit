/**
 * 网站页脚组件
 * 包含版权信息和重要链接（条款、隐私政策、联系方式）
 * 支持响应式设计，在小屏幕上垂直排列，在中等及以上屏幕水平排列
 */
import Link from 'next/link';
import { SiGithub, SiX, SiDiscord } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';
import { SITE, SOCIAL } from '@/constants';

export function Footer() {
  return (
    <footer className="border-t dark:bg-muted/30 bg-muted/60 shadow">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="py-6 md:py-8">
          {/* Responsive grid with better mobile spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {/* Legal Links */}
            <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold text-foreground text-center md:text-left">Legal</h3>
              <ul className="space-y-2 flex flex-col items-center md:items-start">
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground text-center md:text-left">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground text-center md:text-left">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold text-foreground text-center md:text-left">Company</h3>
              <ul className="space-y-2 flex flex-col items-center md:items-start">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground text-center md:text-left">
                    Home
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
              <h3 className="text-sm font-semibold text-foreground text-center md:text-left">Social</h3>
              <div className="flex items-center space-x-4">
                <a
                  href={SOCIAL.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-500"
                >
                  <SiGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href={SOCIAL.X}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-500"
                >
                  <SiX className="h-5 w-5" />
                  <span className="sr-only">X (formerly Twitter)</span>
                </a>
                <a
                  href={SOCIAL.DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-500"
                >
                  <SiDiscord className="h-5 w-5" />
                  <span className="sr-only">DISCORD</span>
                </a>
                <a
                  href={`mailto:${SOCIAL.EMAIL}`}
                  className="text-muted-foreground hover:text-purple-500"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright - Optimized for mobile */}
          <div className="mt-6 pt-6 md:mt-8 md:pt-8 border-t">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} {SITE.NAME}. All rights reserved.
              </p>

              <div className="flex flex-col md:flex-row items-center gap-4 md:space-x-4">
                <div className="flex items-center gap-4">
                  <a
                    href="https://love2.dev"
                    target="_blank"
                    className="flex items-center font-medium text-sm hover:text-foreground transition-colors"
                  >
                    <span className="whitespace-nowrap">Say Love2.dev</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
