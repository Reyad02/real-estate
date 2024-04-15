import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("/Estate.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 lg:px-0">
            {
                cards.map(eachCard =><Card key={eachCard.id} eachCard={eachCard}></Card> )
            }
            
        </div>
    );
};

export default Cards;