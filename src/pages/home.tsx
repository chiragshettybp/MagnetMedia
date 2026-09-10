import { PrismaHero } from "@/components/ui/prisma-hero";
import { LazyFooter } from "@/components/ui/lazy-footer";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-black">
      <div className="sticky top-0 h-dvh w-full">
        <PrismaHero />
      </div>
      <LazyFooter />
    </div>
  );
}