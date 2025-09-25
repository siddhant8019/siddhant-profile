import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturedProject from "@/components/featured-project";
import ProjectPreview from "@/components/project-preview";
import Blog from "@/components/blog";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Services />
      <FeaturedProject />
      <ProjectPreview />
      <Blog />
    </main>
  );
}
