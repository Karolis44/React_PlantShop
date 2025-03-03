

import './componentsStyle/CategoriesList.css'
import Category from './Category';
import useFetch from '../hooks/useFetch';

export default function CategoriesList() {

    const categories = useFetch({url: 'https://gist.githubusercontent.com/Karolis44/71d58ad89e5f8a9c30e499f3516524ec/raw/67b9135b1c087c95100bd8ccf51d356a2858b74b/category.json', folder:'category',apiImage: 'fileName'})

 
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