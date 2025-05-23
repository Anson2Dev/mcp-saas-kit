import Link from 'next/link';
import { Sunrise } from 'lucide-react';
import { SITE } from '@/constants';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-background">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex items-center justify-center">
          <Sunrise className="size-8 text-orange-500" /> {/* Logo */}
          <span className="ml-2 text-xl font-semibold text-foreground">{SITE.NAME}</span> {/* Site Name */}
        </div>
        <h1 className="text-4xl font-bold text-foreground tracking-tight">
          Coming soon
        </h1>
        <p className="text-base text-muted-foreground">
          This page is under construction. Please come back later.
        </p>
        <Link
          href="/"
          className="max-w-48 mx-auto flex justify-center py-2 px-4 border border-border rounded-full shadow-sm text-sm font-medium text-foreground bg-background hover:bg-muted focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
