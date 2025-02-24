
import './app.css';
import SectionCategories from './components/SectionCategories';
import SectionHero from './components/SectionHero';
import Title from './components/Title';

export default function  App() {
  return (
    <div className='App'>
      <div className='App-bin'>
        <SectionHero />
        <SectionCategories />

      </div>      
    </div>
  );
}


