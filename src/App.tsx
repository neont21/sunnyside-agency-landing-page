import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
import { HeroSection } from './components/HeroSection/HeroSection';
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection';

function App() {
  return (
    <>
      <HeroSection />
      <main>
        <FeaturesSection />
        <TestimonialsSection />
      </main>
    </>
  );
}

export default App;