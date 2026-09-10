import { PrismaHero } from "@/components/ui/prisma-hero";
import { SiteFooter } from "@/components/ui/site-footer";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-black">
      <div className="sticky top-0 h-screen w-full">
        <PrismaHero />
      </div>
      <SiteFooter />
    </div>
  );
}