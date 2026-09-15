import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const ServicePage = lazy(() => import("@/pages/service"));
const Work = lazy(() => import("@/pages/work"));
const WorkProjectPage = lazy(() => import("@/pages/work-project"));
const About = lazy(() => import("@/pages/about"));
const Story = lazy(() => import("@/pages/story"));
const Mission = lazy(() => import("@/pages/mission"));
const Team = lazy(() => import("@/pages/team"));
const Process = lazy(() => import("@/pages/process"));
const StartProject = lazy(() => import("@/pages/start-project"));
const Contact = lazy(() => import("@/pages/contact"));
const Faq = lazy(() => import("@/pages/faq"));
const LegalPage = lazy(() => import("@/pages/legal"));
const Sitemap = lazy(() => import("@/pages/sitemap"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return <div className="dark min-h-screen bg-black" aria-hidden="true" />;
}

function AnimatedRoutes() {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1, transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] } }}
        exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.16, ease: [0.25, 0.1, 0.25, 1] } }}
      >
        <Suspense fallback={<RouteFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServicePage />} />

            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkProjectPage />} />

            <Route path="/about" element={<About />} />
            <Route path="/about/story" element={<Story />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/team" element={<Team />} />

            <Route path="/process" element={<Process />} />

            <Route path="/start-project" element={<StartProject />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />

            <Route path="/privacy" element={<LegalPage slug="privacy" />} />
            <Route path="/terms" element={<LegalPage slug="terms" />} />
            <Route path="/cookies" element={<LegalPage slug="cookies" />} />
            <Route path="/accessibility" element={<LegalPage slug="accessibility" />} />

            <Route path="/sitemap" element={<Sitemap />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}