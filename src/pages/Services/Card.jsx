import { Link } from "react-router-dom";

const Card = ({ card }) => {
    const { id, image, name, price, shortDescription } = card;
    console.log(name)
    return (
        <div>
            <div className="bg-base-400">
                <div className="card w-96 h-[500px] bg-base-200 shadow-xl hover:bg-violet-100">
                    <figure className="px-4 pt-6 w-full">
                        <img src={image} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>${price}</p>
                        <div className="card-actions">
                            <Link to ="/servicedetails" className="btn btn-primary">More Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;