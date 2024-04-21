import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ports from "@/components/Ports";
const page = () => {
  return (
    <div className="h-full container mx-auto">
      <Hero />
      <Ports />
      <Footer />
    </div>
  );
};

export default page;
