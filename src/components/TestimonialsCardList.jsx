import './componentsStyle/TestimonialsCardList.css';
import useFetch from '../hooks/useFetch';
import { PacmanLoader } from 'react-spinners';
import TestimonialsCard from './TestimonialsCard';

 export default function TestimonialsCardList() {

      const {result: testimonials, loading, error} = useFetch({url: 'https://gist.githubusercontent.com/Karolis44/f4d8aff1066be2ff064679d4d309201e/raw/691e1579cf24aabcf0723b14714f9ba8b2703b7c/testplant', folder: 'clients', apiImage: 'img' })
     
         if (loading) {
     
             return (
                 <div className='testimonials-card-list'>
                   
                   <PacmanLoader color="#50806B" />
     
                 </div>
             )
         } 
     
         if (error) {
     
             return (
                 <div className='testimonials-card-list'>
                   
                   error: {error}
     
                 </div>
             )
         } 
     console.log(testimonials);
         return (
             <div className='testimonials-card-list'>
                 {
                 testimonials.map(card => (
                    <TestimonialsCard 
                    key={card.id}
                    imageSrc={card.imageSrc}
                    name={card.name}
                    text={card.text}
                    rating={card.rating}
                    />
                 ))}
                
             </div>
         )
     }