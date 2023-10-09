import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const Register = () => {
    const auth = getAuth();
    let navigate = useNavigate()
    

    const handleRegister = e => {

        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            navigate('/login')

            
            
            // ...
        })
        .catch((error) => {

        });

        console.log(form.get('email'))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full h-[500px] max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleRegister} className="card-body rounded-xl">
                            <h1 className="text-4xl font-bold">Register Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register Now</button>
                            </div>
                        </form>
                        <p className="text-center mb-6">Dont Have An Account?? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;