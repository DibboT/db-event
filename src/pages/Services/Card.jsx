const Card = ({card}) => {
    const {id, image, name, price, shortdescription } = card;
    console.log(name)
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        
                            <div className="badge badge-secondary"></div>
                        </h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline"></div>
                            <div className="badge badge-outline"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;