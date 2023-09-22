import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { login } from '../services/login';
import introImg from '../assets/picture.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogginIn, setIsLogginIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please, enter your email and password');
    } else {
      try {
        setIsLogginIn(true);

        const user = await login({
          email,
          password,
        });

        window.localStorage.setItem('currentUser', JSON.stringify(user));
        toast.success(`Welcome... ${user.email}`);

        setEmail('');
        setPassword('');

        setTimeout(() => {
          setIsLogginIn(false);
          navigate('/');
        }, 4000);
      } catch (err) {
        // console.log(err);
        toast.error(err?.response?.data?.error);
        setIsLogginIn(false);
      }
    }
  };

  return (
    <section className="min-h-screen bg-slate-800 flex flex-col items-center md:justify-center md:items-center">
      <div className="md:hidden flex flex-col items-center py-6">
        <div className="flex items-center mb-20 gap-6">
          <img alt="logo" src={introImg} className="w-[4rem] h-[4rem]" />
          <h1 className="font-bold text-2xl text-blue-400">IMAG_INE</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className=" w-full flex flex-col justify-center items-center"
        >
          <h2 className="text-1xl text-gray-200 mb-6">
            Hey there, sign in to{' '}
            <span className="font-bold text-blue-400">IMAG_INE</span>
          </h2>
          <input
            type="text"
            placeholder="Enter email..."
            value={email}
            className="text-sm mb-6 py-3 px-4 border-none font-mono outline-none rounded-lg w-[70vw] opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-gray-200"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password..."
            autoComplete="off"
            value={password}
            className="text-sm mb-3 py-3 px-4 border-none font-mono outline-none rounded-lg w-[70vw] opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-gray-200"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center items-center mx-auto w-full mb-14">
            <p className=" pb-2 mt-2 text-center w-full mx-auto">
              <span className="opacity-90 text-[0.7rem] font-extralight">
                Don't have an account?
              </span>{' '}
              <Link
                className="text-[0.75rem] font-bold text-blue-400"
                to={'/auth/sign_up'}
              >
                Register Here
              </Link>
            </p>
          </div>
          {isLogginIn ? (
            <button className="py-1.5 w-[70vw] bg-blue-600 hover:bg-blue-500 text-sm rounded-md mb-2 opacity-80 cursor-not-allowed">
              Logging in...
            </button>
          ) : (
            <button
              className="py-1.5 w-[70vw] bg-blue-600 hover:bg-blue-500 text-sm rounded-md mb-2"
              type="submit"
            >
              Login
            </button>
          )}
        </form>
      </div>

      <div className="md:flex hidden items-center justify-center h-full w-full py-6">
        <div className="flex justify-center w-[60%] h-full items-center mb-20 gap-6">
          <img
            alt="logo"
            src={introImg}
            className="w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem]"
          />
          <h1 className="font-bold md:text-3xl lg:text-3xl text-blue-400">
            IMAG_INE
          </h1>
        </div>
        <form
          onSubmit={handleLogin}
          className=" w-full flex flex-col justify-center items-center"
        >
          <h2 className="text-1xl text-gray-200 mb-6">
            Hey there, sign in to{' '}
            <span className="font-bold text-blue-400">IMAG_INE</span>
          </h2>
          <input
            type="text"
            value={email}
            placeholder="Enter email..."
            onChange={(e) => setEmail(e.target.value)}
            className="text-sm mb-6 py-3 px-4 border-none font-mono outline-none rounded-lg w-[40vw] opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-gray-200"
          />
          <input
            type="password"
            placeholder="Enter password..."
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-sm mb-3 py-3 px-4 border-none font-mono outline-none rounded-lg w-[40vw] opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-gray-200"
          />
          <div className="flex justify-center items-center mx-auto w-full mb-14">
            <p className=" pb-2 mt-2 text-center w-full mx-auto">
              <span className="opacity-90 text-[0.7rem] font-extralight">
                Don't have an account?
              </span>{' '}
              <Link
                className="text-[0.75rem] font-bold text-blue-400 hover:text-blue-500"
                to={'/auth/sign_up'}
              >
                Register Here
              </Link>
            </p>
          </div>
          {isLogginIn ? (
            <button className="py-1.5 w-[40vw] bg-blue-600 hover:bg-blue-500 text-sm rounded-md mb-2 opacity-80 cursor-not-allowed">
              Logging in...
            </button>
          ) : (
            <button
              className="py-1.5 w-[40vw] bg-blue-600 hover:bg-blue-500 text-sm rounded-md mb-2"
              type="submit"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignIn;
