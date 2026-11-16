import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
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
    </>
  );
}

export default App;