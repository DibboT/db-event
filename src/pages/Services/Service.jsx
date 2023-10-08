import { useEffect, useState } from "react";
import Card from "./Card";


const Service = () => {
    const [cards, setAllCards] = useState([]);

    useEffect(() => {
        fetch('/public/service.json')
        .then(res => res.json())
        .then(data => setAllCards(data))

    })
    return (
        <div className="mt-10">
            <h2 className="text-center text-3xl font-semibold">Our Services</h2>
            <div className="grid grid-cols-3">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }

            </div>
        </div>
    );
};

export default Service;