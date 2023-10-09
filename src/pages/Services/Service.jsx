import { useEffect, useState } from "react";
import Card from "./Card";


const Service = () => {
    const [cards, setAllCards] = useState([]);

    useEffect(() => {
        fetch('/service.json')
        .then(res => res.json())
        .then(data => setAllCards(data))

    })
    return (
        <div className="mt-10 mb-20 mx-4">
            <h2 className="text-center text-3xl font-semibold mt-20">Our Services</h2>
            <div className="grid grid-cols-3 gap-6 my-10">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }

            </div>
        </div>
    );
};

export default Service;