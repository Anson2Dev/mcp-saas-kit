import {
  CloudIcon,
  BoltIcon,
  ShieldCheckIcon,
  Rocket,
  Mail,
  SquareTerminal,
  SunIcon,
  UsersRound,
} from 'lucide-react';

const features = [
  {
    name: "Authentication Ready",
    description:
      "Complete authentication system with email/password sign in, sign up, forgot password flow, and session management using Lucia Auth.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Database & Email",
    description:
      "Drizzle ORM with Cloudflare D1 for the database, and React Email with Resend for beautiful email templates.",
    icon: Mail,
  },
  {
    name: "Modern Stack",
    description:
      "Next.js 15 App Router with React Server Components, Server Actions, and Edge Runtime for optimal performance.",
    icon: BoltIcon,
  },
  {
    name: "Beautiful UI",
    description:
      "Polished UI with Tailwind CSS, Shadcn UI components, dark/light mode, and responsive design out of the box.",
    icon: SunIcon,
  },
  {
    name: "Edge Deployment",
    description:
      "Deploy globally with Cloudflare Workers for zero cold starts and leverage Cloudflare's edge network for blazing-fast performance.",
    icon: CloudIcon,
  },
  {
    name: "Developer Experience",
    description:
      "GitHub Actions for deployment, comprehensive documentation, and TypeScript for type safety.",
    icon: SquareTerminal,
  },
  {
    name: "Form Handling",
    description:
      "Built-in form validation with Zod and React Hook Form for a smooth user experience.",
    icon: Rocket,
  },
  {
    name: "Team Ready",
    description:
      "Built with collaboration in mind. Easy to customize and extend with your team's requirements.",
    icon: UsersRound,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Production Ready
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build a SaaS
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Start with a complete foundation. All the essential features are built-in,
            so you can focus on what makes your SaaS unique.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
