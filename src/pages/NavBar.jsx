import { Link } from "react-router-dom";


const NavBar = () => {
    const NavLink = <>
        <Link to="/home">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

    </>
    return (
        <div>
            <div>

                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/wZtX7GN/gameevent.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                <div className="navbar text-white z-10 absolute top-0 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {NavLink}
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">The Db Eventcon</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4 text-[16px]">
                            {NavLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;