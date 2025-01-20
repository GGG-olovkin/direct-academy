import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import LanguageLevels from './components/LanguageLevels';
import CourseSchedule from './components/CourseSchedule';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Services />
      <LanguageLevels />
      <CourseSchedule />
      <Testimonials />

      {/* Diğer bileşenler */}
    </main>
  );
}