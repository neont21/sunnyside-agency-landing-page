import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
import { FooterSection } from './components/FooterSection/FooterSection';
import { GallerySection } from './components/GallerySection/GallerySection';
import { HeroSection } from './components/HeroSection/HeroSection';
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection';

function App() {
  return (
    <>
      <HeroSection />
      <main>
        <FeaturesSection />
        <TestimonialsSection />
        <GallerySection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;