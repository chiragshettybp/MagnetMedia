import type { ReactNode } from "react";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="dark min-h-screen bg-black">
    <SiteHeader />
    <main className="pb-16">{children}</main>
    <SiteFooter />
  </div>
);