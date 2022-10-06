import React from 'react';
import { Link } from 'react-router-dom';
import { photos } from '../assets';

const Footer: React.FC = () => {
  const handleGetUp = () => {
    window.scroll({
      top: 0,
    });
  };
  return (
    <footer className="flex flex-col justify-center">
      <hr className="border-gray-300" />
      <div className="flex flex-col md:flex-row items-start justify-between mt-4">
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <div className="w-full md:w-fit flex flex-col items-center md:items-start justify-start mb-8 gap-2">
            <img src={photos.Logo} alt="" width={85} className="rounded-md" />
            <p>
              Have an account?{' '}
              <Link
                onClick={handleGetUp}
                to={'/login'}
                className="text-mainBlue underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <div className="w-full md:w-fit flex flex-col items-center md:items-start justify-start mb-8 gap-2">
            <h2 className="text-white bg-black rounded-md px-1">Spatial Command</h2>
            <Link onClick={handleGetUp} to="">
              Model Hub
            </Link>
            <Link onClick={handleGetUp} to="">
              Dataset Hub
            </Link>
            <Link onClick={handleGetUp} to="">
              EO Satellite Hub
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <div className="w-full md:w-fit flex flex-col items-center md:items-start justify-start mb-8 gap-2">
            <h2 className="text-white bg-black rounded-md px-1">Geo indeed</h2>
            <Link onClick={handleGetUp} to="">
              Post/Find a job
            </Link>
            <Link onClick={handleGetUp} to="">
              Training Materials
            </Link>
            <Link onClick={handleGetUp} to="">
              Competition
            </Link>
            <Link onClick={handleGetUp} to="">
              MSc Programs
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <div className="w-full md:w-fit flex flex-col items-center md:items-start justify-start mb-8 gap-2">
            <h2 className="text-white bg-black rounded-md px-1">Information</h2>
            <Link onClick={handleGetUp} to="">
              Our Team
            </Link>
            <Link onClick={handleGetUp} to="">
              Blog
            </Link>
            <Link onClick={handleGetUp} to="">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[90%] flex flex-col sm:flex-row items-center justify-between mb-8">
          <div className="flex items-center justify-center mb-4 sm:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p>Calgary, Alberta, Canada</p>
          </div>
          <div className="flex">
            <a
              href="mailto:hello@spatialcommand.com"
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-8 h-8 p-1 bg-black rounded-md flex items-center justify-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/spatialcommand/"
              className="whitespace-nowrap mx-4 font-bold text-white w-8 h-8 p-1 rounded-md bg-black flex items-center justify-center"
            >
              in
            </a>
            <a
              href="#"
              className="whitespace-nowrap text-base flex items-center justify-center font-medium hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
                className="bg-black w-8 flex items-center justify-center h-8 rounded-md p-1"
              >
                <g id="surface303366040">
                  <path
                    style={{
                      stroke: 'none',
                      fillRule: 'nonzero',
                      fill: 'rgb(100%,100%,100%)',
                      fillOpacity: '1',
                    }}
                    d="M 28 6.9375 C 27.042969 7.363281 26.015625 7.648438 24.9375 7.777344 C 26.039062 7.117188 26.882812 6.070312 27.28125 4.824219 C 26.25 5.4375 25.109375 5.882812 23.894531 6.121094 C 22.921875 5.085938 21.535156 4.4375 20 4.4375 C 17.054688 4.4375 14.664062 6.824219 14.664062 9.769531 C 14.664062 10.1875 14.714844 10.597656 14.804688 10.984375 C 10.371094 10.761719 6.441406 8.640625 3.808594 5.410156 C 3.351562 6.199219 3.089844 7.113281 3.089844 8.09375 C 3.089844 9.945312 4.027344 11.578125 5.460938 12.53125 C 4.585938 12.503906 3.761719 12.265625 3.042969 11.867188 C 3.042969 11.890625 3.042969 11.910156 3.042969 11.933594 C 3.042969 14.519531 4.882812 16.675781 7.324219 17.164062 C 6.875 17.285156 6.402344 17.351562 5.917969 17.351562 C 5.574219 17.351562 5.238281 17.316406 4.914062 17.253906 C 5.59375 19.375 7.5625 20.917969 9.898438 20.960938 C 8.070312 22.390625 5.773438 23.242188 3.273438 23.242188 C 2.84375 23.242188 2.417969 23.21875 2 23.167969 C 4.359375 24.683594 7.164062 25.566406 10.175781 25.566406 C 19.988281 25.566406 25.351562 17.4375 25.351562 10.386719 C 25.351562 10.15625 25.347656 9.925781 25.335938 9.699219 C 26.378906 8.945312 27.285156 8.007812 28 6.9375 Z M 28 6.9375 "
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center my-2 md:mb-0 responsive-font-size">
        All Right Reserved.{' '}
        <Link onClick={handleGetUp} to={'/'} className="text-mainBlue">
          SpatialCommand
        </Link>{' '}
        SpatialCommand 2022
      </div>
    </footer>
  );
};

export default Footer;
