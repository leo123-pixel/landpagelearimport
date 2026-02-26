import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import ResearchDisclaimer from "@/components/ResearchDisclaimer";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CartFloat from "@/components/CartFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ResearchDisclaimer />
        <Products />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartFloat />
    </>
  );
};

export default Index;
