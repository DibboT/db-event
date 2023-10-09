
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebaseconfig";
import { useState } from "react";



const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    let navigate = useNavigate()



    const handleLogin = e => {
        
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;
                setUser(user)
                console.log(user)
                localStorage.setItem("user", JSON.stringify(user))
                navigate('/')
                
            })
            .catch((error) => {
               
            });


    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser)
                console.log(loggedInUser)
                localStorage.setItem("user", JSON.stringify(loggedInUser))
                navigate('/')
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  hover:bg-cyan-100 ">
                        <h2 className="text-center my-4 text-2xl font-bold">Login Now</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  required name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="form-control mx-8">

                            <button onClick={handleGoogleSignIn} className="btn btn-accent">Login With Google</button>


                            {user && <div>
                                <h3>Name: {user.displayName}</h3>
                            </div>}
                        </div>
                        <p className="text-center my-6">Dont Have An Account?? <Link to="/register">Register Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;