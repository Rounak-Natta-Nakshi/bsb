import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About"
import Infrastructure from "@/components/sections/infrastructure"
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Gallery from '@/components/sections/GallerySection'
import Admission from '@/components/sections/Admission'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Infrastructure/>
      <WhyChooseUs/>
      <Gallery/>
      <Admission/>
      <Footer/>
    </main>
  );
}