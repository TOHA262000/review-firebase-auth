import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";
import { auth } from "../../firebase.init";

function Register() {

  const handleRegister =e=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password)

    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
       <div className="hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register Now</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input name="name" type="text" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name ="password" type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
          </div>
          <p>Allready have an account. please <span className="text-blue-400 underline"> <Link to='/login'>Login</Link> </span></p>
        </div>
      </div>
  )
}

export default Register