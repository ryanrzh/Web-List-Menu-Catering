import HeroSection from "@/components/home/HeroSection";
import MenuSection from "@/components/home/MenuSection";
import AppShelter from "@/components/layout/AppShelter";

export default function Home() {
  return (
    <AppShelter>
      <HeroSection />
      <MenuSection />
    </AppShelter>
  );
}
