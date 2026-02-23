import { Link } from "react-router";

const Login = () => {
  return (
   
      <div className="hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
          <p>New to this site? please <span className="text-blue-400 underline"> <Link to='/register'>Register</Link> </span></p>
        </div>
      </div>
  )
}

export default Login;