import { PageLayout } from "@/components/ui/page-layout";
import { ArrowButton, GhostLink } from "@/components/ui/site-sections";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-20 md:px-8 md:pt-32">
        <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(225, 224, 204, 0.45)" }}>
          404 · Error
        </p>
        <h1
          className="mt-4 max-w-3xl font-medium leading-[1.02] tracking-[-0.04em] text-[clamp(2.5rem,8vw,6rem)]"
          style={{ color: "#E1E0CC" }}
        >
          Looks like this page went somewhere else.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed sm:text-base" style={{ color: "rgba(225, 224, 204, 0.7)" }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ArrowButton to="/">Back Home</ArrowButton>
          <GhostLink to="/services">Explore Services</GhostLink>
          <GhostLink to="/start-project">Start a Project</GhostLink>
        </div>
      </section>
    </PageLayout>
  );
}