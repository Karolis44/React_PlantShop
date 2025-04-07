
import './componentsStyle/CategoriesList.css';
import Category from './Category';
import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';

export default function CategoriesList() {

    const { result: categories, loading, error } = useFetch(
        {
            url: 'https://gist.githubusercontent.com/Karolis44/71d58ad89e5f8a9c30e499f3516524ec/raw/67b9135b1c087c95100bd8ccf51d356a2858b74b/category.json',
            folder: 'Category',
            apiImage: 'fileName'
        }
    )







    return (
        <div className="categories-list">
            <DataHandler loading={loading} error={error}>
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
            </DataHandler>
        </div>
    )

}