
import Header from './Header';
import Hero from './Hero';
import './componentsStyle/SectionHero.css';
import TopBanner from './TopBanner';

export default function  SectionHero() {
  return (
    <section className=''>
        <TopBanner />
        <Header />
        <Hero />

    </section>
  );
}


