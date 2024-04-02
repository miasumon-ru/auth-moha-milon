import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";




const Login = () => {

    const {signInUser, user, loginWithGoogle } = useContext(AuthContext)

    console.log(user)

    const navigate = useNavigate()



    const handleLogin = (e)=> {
        e.preventDefault()

        const email  = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        // creating sign in user With Email and Password

        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset()

            navigate('/')
            
           
        })
        .catch(error => {
            console.log(error)
          
        })
    }

    // handle Login With Google

    const handleLoginWithGoogle =() => {
        loginWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">

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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p className="mt-5">New Here ? Please <Link to={'/register'}> <span className="underline font-bold" >Register</span> </Link> </p>

                        <p onClick={handleLoginWithGoogle} >Login with <span  className="underline font-bold btn btn-ghost">Google</span></p>


                       
                    </form>

                  
                </div>
            </div>
        </div>
    );
};

export default Login;