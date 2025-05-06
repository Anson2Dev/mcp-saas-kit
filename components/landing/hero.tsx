import { Button } from '@/components/ui/button';
import { SITE } from '@/constants';
import Link from 'next/link';
import { ShinyButton } from '@/components/ui/shiny-button';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function Hero() {
  return (
    <div className="relative isolate pt-14 dark:bg-gray-900">
      <div className="pt-20 pb-24 sm:pt-20 sm:pb-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-10 flex justify-center gap-4 flex-wrap">
              <ShinyButton className="rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                100% Free & Open Source
              </ShinyButton>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Build Your MCP SaaS in ONE DAY
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ship your MCP SaaS product in record time with our powerful,
                ready-to-use template. Packed with modern technologies and
                essential integrations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 md:gap-x-6">
              <a href={SITE.GITHUB_REPO_URL} target="_blank">
                <Button size="lg" className="rounded-full">
                  View on GitHub
                </Button>
              </a>
              <Link href="/sign-in">
                <Button variant="outline" size="lg" className="rounded-full">
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

