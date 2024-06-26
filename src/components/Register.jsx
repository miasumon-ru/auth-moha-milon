import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
  

    const handleRegister = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value

        console.log(email, password, name)

        // create User with Email and Password
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()

                navigate('/profile')
            })
            .catch(error => {
                console.log(error)

               
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>


                        <p className="mt-5">Already Have an Account ? Please <Link to={'/login'}> <span className="underline font-bold" >Login</span> </Link> </p>

                       


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;