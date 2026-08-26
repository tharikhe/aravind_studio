import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Portfolio from "@/components/Portfolio";
import PhotoGrid from "@/components/PhotoGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Portfolio />
      <PhotoGrid />
    </main>
  );
}
