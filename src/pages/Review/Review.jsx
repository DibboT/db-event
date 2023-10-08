

const Review = () => {
    return (
        <div className="testimonial-section bg-violet-950 pt-16 pb-24  md:pt-28 md:pb-28 relative">
            <span className=" absolute w-2/6 h-2 right-0 top-24 xs:block sm:hidden md:block md:top-48 bg-primary"></span>
            <div className="container px-4">
                <div className="section-title mb-15">
                    <div>
                        <div className="container">
                            <div className="left mx-auto">
                                <h2 className="font-bold text-3xl my-4 text-white">
                                    WHAT PEOPLE’S SAY ABOUT GAME STUDIO

                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="carousel w-[700px]">
                        <div id="item1" className="carousel-item w-full">
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure className="mx-4"><img className="h-[400px] w-[500px] " src="https://images.unsplash.com/photo-1628501939038-2fbce30e11d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80" alt="Movie" /></figure>
                                <div className="mt-[100px] mx-6">
                                    <p className="font-semibold w-text-2xl my-4">"I had the privilege of attending E3 2023,and I can confidently say that it was an experience like no other.<br/>This event is the gaming world's equivalent of a Disneyland for gamers, and it didn't disappoint"</p>
                                    <h4 className="text-2xl font-semibold text-right my-4">Helen</h4>
                                </div>
                            </div>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                        <div className="card card-side bg-base-100 shadow-xl">
                                <figure className="mx-4"><img className="h-[400px] w-[500px] " src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Movie" /></figure>
                                <div className="mt-[100px] mx-6">
                                    <p className="font-semibold w-text-2xl my-4">"I had the privilege of attending E3 2023,and I can confidently say that it was an experience like no other.<br/>This event is the gaming world's equivalent of a Disneyland for gamers, and it didn't disappoint"</p>
                                    <h4 className="text-2xl font-semibold text-right my-4">Helen</h4>
                                </div>
                            </div>
                        </div>
                        <div id="item3" className="carousel-item w-full">
                        <div className="card card-side bg-base-100 shadow-xl">
                                <figure className="mx-4 my-4"><img className="h-[400px] w-[500px] " src="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Movie" /></figure>
                                <div className="mt-[100px] mx-6">
                                    <p className="font-semibold w-text-2xl my-4">"I had the privilege of attending E3 2023,and I can confidently say that it was an experience like no other.<br/>This event is the gaming world's equivalent of a Disneyland for gamers, and it didn't disappoint"</p>
                                    <h4 className="text-2xl font-semibold text-right my-4">Helen</h4>
                                </div>
                            </div>
                        </div>
                        <div id="item4" className="carousel-item w-full">
                        <div className="card card-side bg-base-100 shadow-xl">
                                <figure className="mx-4"><img className="h-[400px] w-[500px] " src="https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Movie" /></figure>
                                <div className="mt-[100px] mx-6">
                                    <p className="font-semibold w-text-2xl my-4">"I had the privilege of attending E3 2023,and I can confidently say that it was an experience like no other.<br/>This event is the gaming world's equivalent of a Disneyland for gamers, and it didn't disappoint"</p>
                                    <h4 className="text-2xl font-semibold text-right my-4">Helen</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-[700px] py-2 gap-2">
                        <a href="#item1" className="btn btn-accent btn-xs">1</a>
                        <a href="#item2" className="btn btn-accent btn-xs">2</a>
                        <a href="#item3" className="btn btn-accent btn-xs">3</a>
                        <a href="#item4" className="btn btn-accent btn-xs">4</a>
                    </div>


                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    );
};

export default Review;