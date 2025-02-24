
import { useState, useEffect, use } from 'react'
import './CategoriesList.css'
import Category from './Category';

export default function CategoriesList() {

      const[categories, setCategories] = useState([]);

      useEffect(() => {

        const fetchCategories = async () => {
            try{
                const response = await fetch('https://gist.githubusercontent.com/Karolis44/71d58ad89e5f8a9c30e499f3516524ec/raw/67b9135b1c087c95100bd8ccf51d356a2858b74b/category.json')
                const data = await response.json();
                console.log(data);

                const categoriesWithImages = await Promise.all(data.map(async (category) => {
                    const imagePath = await
                    import(`../img/category/${category.fileName}`);
                    return {
                        ...category,
                        imageSrc: imagePath.default,
                    }
                 }));
                 console.log(categoriesWithImages);
                 setCategories(categoriesWithImages);

            }catch(error){
                console.error('Klaida gaunant kategorijas', error);
            }
        }
        fetchCategories();
      },[]);

      

    return (
        <div className='categories-list'>
            {
                categories.map((category) => (
                    <Category 
                       key={category.id}
                       imageSrc={category.imageSrc}
                       title={category.title}

                    />
                )
                )
            } 

        </div>
    )
}