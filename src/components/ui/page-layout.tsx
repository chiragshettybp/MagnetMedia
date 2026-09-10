import type { ReactNode } from "react";
import { SiteHeader } from "@/components/ui/site-header";
import { LazyFooter } from "@/components/ui/lazy-footer";

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="dark min-h-screen bg-black">
    <SiteHeader />
    <main className="pb-16">{children}</main>
    <LazyFooter />
  </div>
);