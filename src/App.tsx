import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageLoader } from "@/components/PageLoader";

const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const ServiceDetail = lazy(() => import("@/pages/service-detail"));
const Gallery = lazy(() => import("@/pages/gallery"));
const Reviews = lazy(() => import("@/pages/reviews"));
const Contact = lazy(() => import("@/pages/contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if ((window as Window & { lenis?: { scrollTo: (y: number, opts: { immediate: boolean }) => void } }).lenis) {
      (window as Window & { lenis?: { scrollTo: (y: number, opts: { immediate: boolean }) => void } }).lenis!.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <AppLayout>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/:id" component={ServiceDetail} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </AppLayout>
  );
}

function shouldUseSmoothScroll() {
  if (typeof window === "undefined") return false;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const lowMemory = "deviceMemory" in navigator && (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4;

  return !reducedMotion && !coarsePointer && !lowMemory;
}

function App() {
  useEffect(() => {
    if (!shouldUseSmoothScroll()) return;

    let lenis: { destroy: () => void; on: (event: string, cb: () => void) => void; raf: (time: number) => void } | null = null;
    let raf: ((time: number) => void) | null = null;
    let gsapRef: typeof import("gsap").gsap | null = null;
    let cancelled = false;

    void Promise.all([
      import("@studio-freight/lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([LenisModule, gsapModule, scrollTriggerModule]) => {
      if (cancelled) return;

      const Lenis = LenisModule.default;
      const { gsap } = gsapModule;
      const { ScrollTrigger } = scrollTriggerModule;
      gsapRef = gsap;

      gsap.registerPlugin(ScrollTrigger);

      const instance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      }) as NonNullable<typeof lenis>;

      lenis = instance;
      (window as Window & { lenis?: typeof lenis }).lenis = instance;

      instance.on("scroll", ScrollTrigger.update);

      raf = (time: number) => instance.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    });

    return () => {
      cancelled = true;
      if (raf && gsapRef) {
        gsapRef.ticker.remove(raf);
      }
      lenis?.destroy();
      (window as Window & { lenis?: typeof lenis }).lenis = undefined;
    };
  }, []);

  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
