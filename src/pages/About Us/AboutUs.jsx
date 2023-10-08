

const AboutUs = () => {
    return (
        <div>
            <div>
                <h2 className="relative top-[200px] left-[600px] text-white text-4xl font-bold" >About Us</h2>
                <img className="w-full" src="https://i.ibb.co/CMsQdsj/banner.jpg"></img>
            </div>
            <div>

                <div className="card lg:card-side bg-base-100 shadow-xl mx-20 mt-20 mb-10">
                    <figure><img src="https://i.ibb.co/mDTMtXg/card1.jpg" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold">Our Mission</h2>
                        <p className="text-[16px]">Our mission is to connect gamers from all walks of life, offering a platform <br/>where they can find the latest news, expert insights, and a vibrant community to <br/>share their love for gaming. We're dedicated to creating a hub that's not just about playing games but also about understanding and appreciating the art, technology, and culture that make gaming a truly exceptional experience.</p>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;