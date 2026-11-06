import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Projects = lazy(() => import("@/pages/Projects"));
const Products = lazy(() => import("@/pages/Products"));
const Careers = lazy(() => import("@/pages/Careers"));
const Downloads = lazy(() => import("@/pages/Downloads"));
const Contact = lazy(() => import("@/pages/Contact"));
const PolicyPage = lazy(() => import("@/pages/PolicyPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function RouteFallback() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-pearl">
      <div className="flex flex-col items-center gap-4">
        <span className="font-display text-xl font-extrabold tracking-tight text-navy">
          PPIS
        </span>
        <span className="h-1 w-40 overflow-hidden rounded-full bg-platinum/50">
          <span className="block h-full w-1/2 animate-shimmer rounded-full bg-[linear-gradient(90deg,transparent,#c5a46d,transparent)] bg-[length:200%_100%]" />
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PolicyPage kind="privacy" />} />
            <Route path="/terms" element={<PolicyPage kind="terms" />} />
            <Route path="/cookies" element={<PolicyPage kind="cookies" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
