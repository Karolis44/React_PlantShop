
import useFetch from "../hooks/useFetch";
import { useProducts } from "../hooks/useProducts";
import PlantCard from "./PlantCard";
import './componentsStyle/HotCardList.css'
import PacmanLoader from "react-spinners/PacmanLoader";

export default function HotCardList() {

    // const { result: products, loading, error } = useFetch({ url: 'https://gist.githubusercontent.com/Karolis44/2f3d666911bcb024b0b203c66b653501/raw/7f94d8f3b152d5b1ba276dbef392748f2ec38a86/plants.json', folder: 'plants-data', apiImage: 'image' })
   
    const {products, loading, error } = useProducts();

    const filteredProduct = products.filter(plant => plant.rating === 5)



    if (loading) {

        return (
            <div className='best-card-list'>

                <PacmanLoader color="#50806B" />

            </div>
        )
    }

    if (error) {

        return (
            <div className='best-card-list'>

                error: {error}

            </div>
        )
    }


    return (
        <div className="hot-cards-list">
            {
                filteredProduct.map(plant => (

                    <PlantCard
                        key={plant.id}
                        imageSrc={plant.imageSrc}
                        title={plant.title}
                        price={plant.price}
                        showDiscount={false}
                        discount={plant.discount}
                    />

                ))
            }
        </div>
    )
}