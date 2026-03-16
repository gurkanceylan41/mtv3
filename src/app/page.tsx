import ShaderBackground from "@/components/ShaderBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import ProductShowcase from "@/components/ProductShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <ProductShowcase />
        <WhyChooseUs />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
