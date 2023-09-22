import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-center mt-12 md:mt-20 gap-6 md:gap-8">
      <div className="flex items-center justify-center gap-6 md:gap-14 ">
        <Link to={'/'}>
          <img
            alt="facebook"
            src={facebook}
            className="h-6 w-6 md:h-8 md:w-8 hover:shadow-xl"
          />
        </Link>
        <Link to={'/'}>
          <img
            alt="instagram"
            src={instagram}
            className="h-6 w-6 md:h-8 md:w-8 hover:shadow-xl"
          />
        </Link>
        <Link to={'/'}>
          <img
            alt="twitter"
            src={twitter}
            className="h-6 w-6 md:h-8 md:w-8 hover:shadow-xl"
          />
        </Link>
        <Link to={'/'}>
          <img
            alt="youtube"
            src={youtube}
            className="h-6 w-6 md:h-8 md:w-8 hover:shadow-xl"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-6 md:gap-14 text-xs md:text-base text-gray-300 font-bold">
        <Link to={'/'} className="hover:opacity-80">
          Conditions of Use
        </Link>
        <Link to={'/'} className="hover:opacity-80">
          Privacy & Policy
        </Link>
        <Link to={'/'} className="hover:opacity-80">
          Press Room
        </Link>
      </div>
      <div>
        <p className="font-semibold text-xs md:text-base text-gray-400 mb-8">
          ©{year} DND by Odo Peter Ebere
        </p>
      </div>
    </div>
  );
};

export default Footer;
