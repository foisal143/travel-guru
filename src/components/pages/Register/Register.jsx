import React, { useContext, useState } from 'react';
import { FaEye, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../sharedpage/Header/Header';
import { AtuhContext } from '../../../UserContext/UserContext';

const Register = () => {
  const { googleLogin, createUser } = useContext(AtuhContext);
  const [error, setError] = useState('');
  const [showpass, setShowPass] = useState(false);
  // google login handler
  const handlerGoogleLogin = () => {
    setError('');
    googleLogin()
      .then(result => {
        const logedUser = result.user;
        console.log(logedUser);
      })
      .catch(er => setError(er.message));
  };

  // create user with  email and password
  const handlerFormSubmit = e => {
    setError('');
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPass.value;
    //  password validation
    if (password.length < 6) {
      setError('password should be at least 6 charecter');
      return;
    } else if (password !== confirmPassword) {
      setError('password not match');
      return;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      setError('password should be one capital letter');
      return;
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setError('password should be one small letter');
      return;
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setError('password should be at least one digit');
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError('password should be a special charecter');
      return;
    }

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch(er => setError(er.message));
  };

  return (
    <div>
      <Header></Header>
      <div className="hero mt-20 min-h-screen ">
        <div className="hero-content  rounded-xl lg:w-2/5 flex-col ">
          <div className="card  w-full  bg-base-100 shadow-2xl ">
            <div className="text-left px-8 ">
              <h1 className="text-3xl font-semibold">Register </h1>
            </div>
            <form onSubmit={handlerFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  name="firstName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  className="input input-bordered"
                  required
                  name="lastName"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
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
                <span>
                  <FaEye></FaEye>
                </span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                  name="confirmPass"
                />
                <small className="text-red-300 text-xs mt-3 ms-1">
                  {error}
                </small>
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-[#F9A51A]">Register</button>
              </div>
              <label className="label mx-auto">
                Already have an account?
                <Link className="text-[#F9A51A] ms-3" to="/login">
                  Login
                </Link>
              </label>
            </form>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-32 h-[2px] bg-gray-300"></div>
            <p>Or</p>
            <div className="w-32 h-[2px] bg-gray-300"></div>
          </div>
          <div className="flex flex-col gap-3 w-full">
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

export default Register;
