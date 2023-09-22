import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../services/users';
import toast from 'react-hot-toast';

import introImg from '../assets/picture.png';

const SignUp = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.error('All fields are required');
    }
    try {
      setIsRegistering(true);
      const user = await createUser({
        email,
        password,
      });

      if (user) {
        toast.success(`${user.email} registered successfully`);

        setEmail('');
        setPassword('');

        setTimeout(() => {
          setIsRegistering(false);
          navigate('/auth/sign_in');
        }, 3000);
      }
      console.log(user);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.error);
      setIsRegistering(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-800 flex flex-col items-center md:justify-center">
      <div className="flex flex-col md:hidden items-center py-6">
        <div className="flex items-center mb-20 gap-6">
          <img alt="logo" src={introImg} className="w-[4rem] h-[4rem]" />
          <h1 className="font-bold text-2xl text-gray-200">IMAG_INE</h1>
        </div>
        <form
          onSubmit={handleRegister}
          className=" w-full flex flex-col justify-center items-center"
        >
          <h2 className="text-1xl text-gray-200 mb-6">
            Sign up to <span className="font-bold text-blue-400">IMAG_INE</span>
          </h2>
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            className="text-sm mb-6 py-3 px-4 border-none font-mono outline-none rounded-lg w-[70vw] opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            className="text-sm mb-3 py-3 px-4 border-none font-mono outline-none rounded-lg w-[70vw] opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-white"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center items-center mx-auto w-full mb-14">
            <p className=" pb-2 mt-2 text-center w-full mx-auto">
              <span className="opacity-90 text-[0.7rem] font-extralight">
                Have an account?
              </span>{' '}
              <Link
                className="text-[0.75rem] font-bold text-blue-400"
                to={'/auth/sign_in'}
              >
                Login Here
              </Link>
            </p>
          </div>
          {isRegistering ? (
            <button
              className="py-1.5 w-[70vw] bg-blue-600 text-sm rounded-md mb-2 opacity-80 cursor-not-allowed"
              type="submit"
            >
              Registering
            </button>
          ) : (
            <button
              className="py-1.5 w-[70vw] bg-blue-600 text-sm rounded-md mb-2"
              type="submit"
            >
              Register
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
          onSubmit={handleRegister}
          className=" w-full flex flex-col justify-center items-center"
        >
          <h2 className="text-1xl text-gray-200 mb-6">
            Sign up to <span className="font-bold text-blue-400">IMAG_INE</span>
          </h2>
          <input
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-sm mb-6 py-3 px-4 border-none font-mono outline-none rounded-lg w-[40vw] opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-gray-200"
          />
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-sm mb-3 py-3 px-4 border-none font-mono outline-none rounded-lg w-[40vw] opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-gray-200"
          />
          <div className="flex justify-center items-center mx-auto w-full mb-14">
            <p className=" pb-2 mt-2 text-center w-full mx-auto">
              <span className="opacity-90 text-[0.7rem] font-extralight">
                Have an account?
              </span>{' '}
              <Link
                className="text-[0.75rem] font-bold text-blue-400 hover:text-blue-500"
                to={'/auth/sign_in'}
              >
                Login Here
              </Link>
            </p>
          </div>
          {isRegistering ? (
            <button className="py-1.5 w-[40vw] bg-blue-600 hover:bg-blue-500 text-sm rounded-md mb-2 opacity-80 cursor-not-allowed">
              Registering
            </button>
          ) : (
            <button
              className="py-1.5 w-[40vw] bg-blue-600 hover:bg-blue-500 text-sm rounded-md mb-2"
              type="submit"
            >
              Register
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default SignUp;
