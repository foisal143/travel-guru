import React, { useContext, useState } from 'react';
import Header from '../sharedpage/Header/Header';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AtuhContext } from '../../../UserContext/UserContext';

const Login = () => {
  const { googleLogin, loginWithEmaiPass } = useContext(AtuhContext);
  const [error, setError] = useState('');
  const handlerGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const logedUser = result.user;
        console.log(logedUser);
      })
      .catch(er => console.log(er.message));
  };

  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmaiPass(email, password)
      .then(res => console.log(res.user))
      .catch(er => setError(er.message));
  };
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  rounded-xl lg:w-1/2 flex-col ">
          <div className="card shrink-0 w-full max-w-sm bg-base-100">
            <div className="text-left px-8 ">
              <h1 className="text-3xl font-semibold">Login </h1>
            </div>
            <form onSubmit={handlerFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <small className="text-xs text-red-300 my-2">{error}</small>
                <div className="flex justify-between mt-5 items-center">
                  <div>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="label-text-alt">
                      {' '}
                      Remember me!
                    </label>
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-[#F9A51A]">Login</button>
              </div>
              <label className="label mx-auto">
                Don't have an account?
                <Link className="text-[#F9A51A] ms-3" to="/register">
                  Create an account
                </Link>
              </label>
            </form>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-32 h-[2px] bg-gray-300"></div>
            <p>Or</p>
            <div className="w-32 h-[2px] bg-gray-300"></div>
          </div>
          <div className="flex flex-col gap-3 w-1/2">
            <button className="btn btn-outline  btn-info">
              <FaFacebook></FaFacebook> Continue with facebook
            </button>
            <button
              onClick={handlerGoogleLogin}
              className="btn btn-outline  btn-success"
            >
              <FaGoogle /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
