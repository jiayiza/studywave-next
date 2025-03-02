import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      {/* Background decoration elements */}
      <div className="bg-primary/5 absolute top-20 left-0 -z-10 h-72 w-72 rounded-full blur-3xl filter"></div>
      <div className="bg-primary/5 absolute right-0 bottom-10 -z-10 h-80 w-80 rounded-full blur-3xl filter"></div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="bg-secondary animate-fade-in mb-6 inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wide">
            Transform your study experience
          </div>

          <h1 className="font-display animate-slide-up mb-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Turn lectures into organized knowledge
          </h1>

          <p
            className="text-muted-foreground animate-slide-up mb-10 max-w-2xl text-lg md:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            Upload your audio or video lectures, and StudyWave will help you
            create summaries and interactive mind maps that make learning
            efficient and enjoyable.
          </p>

          <div
            className="animate-slide-up flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href="/upload">
              <Button size="lg" className="rounded-full px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div
          className="glass-panel shadow-glass animate-fade-in relative mt-16 overflow-hidden rounded-2xl p-1 md:mt-24"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="from-primary/5 bg-gradient-href-r href-transparent absolute inset-0"></div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="StudyWave Dashboard Preview"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
