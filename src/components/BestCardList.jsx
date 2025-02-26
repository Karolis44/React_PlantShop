import { useState, useEffect } from "react"
import BestCard from "./BestCard";

export default function BestCardList() {

    const [bestCards, setBestCards] = useState([]);

    useEffect(() => {

        const fetchBestCards = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/Karolis44/638d5259e9b5c457aacadb987dbb4ae3/raw/be8894a47d3e6c24c563d9df145768978b8726dc/category.json')
                const data = await response.json();
                console.log(data);

                const bestCardsWithImages = await Promise.all(data.map(async (bc) => {
                    const imagePath = await
                        import(`../img/bestSelling/${bc.fileName}`);
                    return {
                        ...bc,
                        imageSrc: imagePath.default,
                    }
                }));
                console.log(bestCardsWithImages);
                setBestCards(bestCardsWithImages);

            } catch (error) {
                console.error('Klaida gaunant BestCards', error);
            }
        }
        fetchBestCards();
    }, []);

    console.log(bestCards)

    return (
        <div className='best-card-list'>
            {
                bestCards.map((card) =>
                (
                    <BestCard
                        key={card.id}
                        imageSrc={card.imageSrc}
                        title={card.title}
                    />
                ))
            }
        </div>
    )
}