import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Send, Zap, ShieldCheck, Bot, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
          <Send className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg font-headline">SwiftSend</span>
        </Link>
        <nav className="ml-auto flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                  Send Money, Not Hassle.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
                  Experience the future of money transfers. SwiftSend offers instant, secure, and AI-powered payments right at your fingertips.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                   <Button asChild size="lg">
                    <Link href="/signup">Get Started for Free</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="digital payment"
                className="mx-auto aspect-video overflow-hidden rounded-2xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>
        
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Why Choose SwiftSend?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've built a platform that's not just fast, but also smart and secure.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3">
              <div className="grid gap-4 text-center p-6 rounded-xl bg-card shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex justify-center items-center mb-2">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                        <Zap className="h-8 w-8" />
                    </div>
                </div>
                <h3 className="text-xl font-bold font-headline">Instant Transfers</h3>
                <p className="text-muted-foreground text-sm">
                  Send and receive money in seconds, not days. Our network is optimized for speed and reliability.
                </p>
              </div>
              <div className="grid gap-4 text-center p-6 rounded-xl bg-card shadow-sm hover:shadow-lg transition-shadow">
                 <div className="flex justify-center items-center mb-2">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                </div>
                <h3 className="text-xl font-bold font-headline">Bank-Grade Security</h3>
                <p className="text-muted-foreground text-sm">
                  Your data and transactions are protected with top-tier encryption and fraud detection systems.
                </p>
              </div>
              <div className="grid gap-4 text-center p-6 rounded-xl bg-card shadow-sm hover:shadow-lg transition-shadow">
                 <div className="flex justify-center items-center mb-2">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                        <Bot className="h-8 w-8" />
                    </div>
                </div>
                <h3 className="text-xl font-bold font-headline">AI-Powered Suggestions</h3>
                <p className="text-muted-foreground text-sm">
                  Get smart emoji suggestions to add a personal and fun touch to all of your transfers.
                </p>
              </div>
            </div>
          </div>
        </section>

         <section className="w-full py-20 md:py-28">
            <div className="container">
              <div className="mx-auto max-w-4xl rounded-xl bg-primary/90 p-8 text-center shadow-2xl md:p-12">
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">
                  Ready to Send with Swiftness?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
                  Join thousands of satisfied users. Create your account in minutes and start sending money securely and instantly across the globe.
                </p>
                <Button variant="secondary" size="lg" asChild className="mt-8">
                  <Link href="/signup">
                    Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 SwiftSend. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
