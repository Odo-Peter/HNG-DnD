import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Search from '../components/search';
import SearchFeed from '../components/SearchFeed';
import HomeFeed from '../components/HomeFeed';
import UploadModal from '../components/UploadModal';
import SignIn from './auth-sign-in';
import Footer from '../components/Footer';

import introImg from '../assets/picture.png';
import avatar from '../assets/icons8.png';
import logout from '../assets/logout.png';

import { image_src } from '../utils/mapper';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modal, setModal] = useState(false);
  const [, setFiles] = useState(null);
  const [user, setUser] = useState(null);
  const [searchTagImg, setSearchTagImg] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const userJSON = window.localStorage.getItem('currentUser');

    if (userJSON) {
      const user = JSON.parse(userJSON);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    const searchTag = image_src.filter((t) => t.tag === search);
    setSearchTagImg([].concat(searchTag));
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchTerm(search);

    // const searchTag = image_src.filter((t) => t.tag === search);
    // setSearchTagImg([].concat(searchTag));

    setSearch('');
  };

  // console.log(searchTerm);

  const handleCloseModal = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleFileChange = (files) => {
    setFiles(files[files.length - 1]);
  };

  const handleUploadModal = (e) => {
    e.preventDefault();
    console.log('Hotfix probably');

    setModal(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);

    window.localStorage.removeItem('currentUser');
    navigate('/auth/sign_in');
  };

  return (
    <>
      {user ? (
        <section className="min-h-screen bg-slate-800 flex flex-col items-center py-14 md:py-18 relative">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-4 md:gap-8 mb-2">
              <img
                alt="logo"
                src={introImg}
                className="h-[3rem] w-[3rem] md:h-[6rem] md:w-[6rem]"
              />
              <h1 className="font-bold md:text-3xl lg:text-3xl text-blue-400 text">
                IMAG_INE
              </h1>
            </div>
            <p className="text-center font-semibold text-gray-300 text-[0.75rem] md:text-[1rem]">
              Rearranging your images just the way you want it
            </p>
          </div>
          <div className="absolute top-2 right-1 text-gray-300 flex flex-col items-center">
            <img
              alt="avatar"
              src={avatar}
              className="h-8 w-8 md:h-12 md:w-12"
            />
            <div
              className="flex gap-[8px] items-center justify-center hover:bg-slate-900 py-[8px] px-[10px] hover:rounded-md mt-1 cursor-pointer"
              onClick={handleLogout}
            >
              <p className="text-[0.7rem] md:text-sm">Log out</p>
              <img
                alt="logout"
                src={logout}
                className="h-4 w-4 md:h-6 md:w-6"
              />
            </div>
          </div>
          <Search
            handleSearch={handleSearch}
            handleSearchChange={(e) => setSearch(e.target.value)}
            search={search}
          />
          {searchTerm && searchTagImg.length > 1 ? (
            <SearchFeed image_src={searchTagImg} />
          ) : (
            <HomeFeed image_src={image_src} />
          )}

          <div className="mb-10 flex justify-center items-center">
            <button
              className="w-[60vw] md:w-[45vw] lg:w-[35vw] py-2 md:py-3 text-gray-200 text-[0.8rem] bg-green-700 hover:bg-green-600 rounded-md"
              onClick={() => setModal(true)}
            >
              Add more photos to gallery
            </button>
          </div>
          {modal && (
            <UploadModal
              handleCloseModal={handleCloseModal}
              handleFileChange={handleFileChange}
              handleUploadModal={handleUploadModal}
            />
          )}
          <Footer />
        </section>
      ) : (
        <SignIn />
      )}
    </>
  );
};

/*
{
    "email": "user@example.com",
    "password": "1Password"
}

*/

export default Home;
