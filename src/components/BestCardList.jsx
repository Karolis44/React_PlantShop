
import BestCard from "./BestCard";
import './componentsStyle/BestCardList.css'
import useFetch from "../hooks/useFetch";


export default function BestCardList() {

    const bestCards = useFetch({url: 'https://gist.githubusercontent.com/Karolis44/638d5259e9b5c457aacadb987dbb4ae3/raw/eb4fafa377a9dbdb95fb2be5c0143059a001e103/bestc.json', folder: 'bestSelling', apiImage: 'fileName' })


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