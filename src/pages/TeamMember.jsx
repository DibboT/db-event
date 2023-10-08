import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const TeamMember = () => {
    return (
        <div className="">
            <h2 className='text-center my-10 text-3xl'>Our Team Members</h2>
            <div>
                <OwlCarousel className='owl-theme' autoplay loop margin={10} nav>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/hHdt7sx/teammember1.webp" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Rita</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/VTt7HTK/temmember2.webp" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Suzan</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/J78cM95/teammember3.webp" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Carla</h2>
                                <p></p>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.ibb.co/wWHDkMj/teammember4.webp" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Kevin</h2>
                                <p></p>
                                
                            </div>
                        </div>
                    </div>
                </OwlCarousel>;
            </div>
        </div>
    );
};

export default TeamMember;