import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "@/pages/home";
import Services from "@/pages/services";
import ServicePage from "@/pages/service";
import Solutions from "@/pages/solutions";
import SolutionPage from "@/pages/solution";
import Work from "@/pages/work";
import WorkProjectPage from "@/pages/work-project";
import Products from "@/pages/products";
import ProductPage from "@/pages/product";
import Labs from "@/pages/labs";
import About from "@/pages/about";
import Story from "@/pages/story";
import Mission from "@/pages/mission";
import Team from "@/pages/team";
import Process from "@/pages/process";
import Technology from "@/pages/technology";
import Ai from "@/pages/ai";
import AiTopicPage from "@/pages/ai-topic";
import StartProject from "@/pages/start-project";
import Contact from "@/pages/contact";
import Faq from "@/pages/faq";
import LegalPage from "@/pages/legal";
import Sitemap from "@/pages/sitemap";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />

        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />

        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<WorkProjectPage />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/labs" element={<Labs />} />
        <Route path="/products/:slug" element={<ProductPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/about/story" element={<Story />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/team" element={<Team />} />

        <Route path="/process" element={<Process />} />
        <Route path="/technology" element={<Technology />} />

        <Route path="/ai" element={<Ai />} />
        <Route path="/ai/:slug" element={<AiTopicPage />} />

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
    </BrowserRouter>
  );
}