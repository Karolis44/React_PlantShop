
import useFetch from "../hooks/useFetch";
import PlantCard from "./PlantCard";

export default function HotCardList() {

    const products = useFetch({ url: 'https://gist.githubusercontent.com/Karolis44/2f3d666911bcb024b0b203c66b653501/raw/7f94d8f3b152d5b1ba276dbef392748f2ec38a86/plants.json', folder: 'plants-data', apiImage: 'image' })

    console.log(products)

    const filteredProduct = products.filter(plant => plant.rating == 5)

    console.log(filteredProduct)


    return (
        <div>
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