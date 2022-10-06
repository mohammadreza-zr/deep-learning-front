import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { photos } from '../assets';
import { useAppDispatch, useAppSelector } from '../hooks';
import { removeToken } from '../redux';
import { toast } from 'react-toastify';

export default function Example() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const userRole = useAppSelector((state) => state.auth.role);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeToken());
    setIsNavOpen((pre) => !pre);
    toast('Logout!');
    navigate('/', {
      replace: true,
    });
  };

  const handleGetUp = () => {
    setDropdownIsOpen(false);
    window.scroll({
      top: 0,
    });
  };

  return (
    <Popover className="relative bg-white border-b border-gray-300 z-20">
      <div className="flex items-center justify-between mb-4 lg:justify-start lg:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="/" onClick={() => setDropdownIsOpen(false)}>
            <span className="sr-only">Deep Learning</span>
            <img className="h-10 w-auto sm:h-12 rounded-md" src={photos.Logo} alt="" />
          </Link>
        </div>
        <div className="-my-2 -mr-2 lg:hidden">
          <Popover.Button
            onClick={() => {
              setIsNavOpen((pre) => !pre);
              setDropdownIsOpen(false);
            }}
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
          <Link
            to={'/datasets'}
            onClick={() => setDropdownIsOpen(false)}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Datasets
          </Link>
          <Link
            to="/"
            onClick={() => setDropdownIsOpen(false)}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Models
          </Link>
          <Link
            to="/"
            onClick={() => setDropdownIsOpen(false)}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            EO Satellites
          </Link>
          <div className="relative">
            <button
              onClick={() => setDropdownIsOpen((pre: boolean) => !pre)}
              data-dropdown-toggle="dropdownNavbar"
              className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
            >
              Geo indeed
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`${
                dropdownIsOpen ? '' : 'hidden'
              } absolute left-0 top-3/4 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44`}
            >
              <Link
                onClick={handleGetUp}
                to=""
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Post/Find a job
              </Link>
              <Link
                onClick={handleGetUp}
                to=""
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Training Materials
              </Link>
              <Link
                onClick={handleGetUp}
                to=""
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Competition
              </Link>
              <Link
                onClick={handleGetUp}
                to=""
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                MSc Programs
              </Link>
            </div>
          </div>
          {userRole === 'ADMIN' || userRole === 'SUPER_ADMIN' ? (
            <Link
              to="/admin"
              onClick={() => setDropdownIsOpen(false)}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              admin
            </Link>
          ) : null}
          {userRole === 'SUPER_ADMIN' ? (
            <Link
              to="/promote"
              onClick={() => setDropdownIsOpen(false)}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Promote
            </Link>
          ) : null}
        </Popover.Group>
        <div className="hidden items-center justify-end lg:flex lg:flex-1">
          <Link
            to="/login"
            onClick={() => setDropdownIsOpen(false)}
            className="inline-flex items-center ml-2 justify-center whitespace-nowrap rounded-full border border-gray-700 p-1 text-base font-medium text-gray-700 shadow-sm"
          >
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>
        </div>
      </div>

      <Transition
        show={isNavOpen}
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform pt-2 transition lg:hidden z-10"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={photos.Logo} alt="Your Company" />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    onClick={() => {
                      setIsNavOpen((pre) => !pre);
                      setDropdownIsOpen(false);
                    }}
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="flex flex-col gap-y-4 gap-x-8">
                <div className="relative">
                  <button
                    onClick={() => setDropdownIsOpen((pre: boolean) => !pre)}
                    data-dropdown-toggle="dropdownNavbar"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                  >
                    Geo indeed
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className={`${
                      dropdownIsOpen ? '' : 'hidden'
                    } w-full absolute left-0 top-3/4 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 md:w-44`}
                  >
                    <Link
                      onClick={handleGetUp}
                      to=""
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Post/Find a job
                    </Link>
                    <Link
                      onClick={handleGetUp}
                      to=""
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Training Materials
                    </Link>
                    <Link
                      onClick={handleGetUp}
                      to=""
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Competition
                    </Link>
                    <Link
                      onClick={handleGetUp}
                      to=""
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      MSc Programs
                    </Link>
                  </div>
                </div>
                <Link
                  to="/"
                  onClick={() => {
                    setIsNavOpen((pre) => !pre);
                    setDropdownIsOpen(false);
                  }}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Models
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    setIsNavOpen((pre) => !pre);
                    setDropdownIsOpen(false);
                  }}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  EO Satellites
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    setIsNavOpen((pre) => !pre);
                    setDropdownIsOpen(false);
                  }}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Geo indeed
                </Link>
                {userRole === 'ADMIN' || userRole === 'SUPER_ADMIN' ? (
                  <Link
                    to="/admin"
                    onClick={() => {
                      setIsNavOpen((pre) => !pre);
                      setDropdownIsOpen(false);
                    }}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    admin
                  </Link>
                ) : null}
                {userRole === 'SUPER_ADMIN' ? (
                  <Link
                    to="/promote"
                    onClick={() => {
                      setIsNavOpen((pre) => !pre);
                      setDropdownIsOpen(false);
                    }}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Promote
                  </Link>
                ) : null}
                {userRole ? (
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Logout
                  </Link>
                ) : (
                  <div className="flex items-center justify-start">
                    <Link
                      to={'/login'}
                      onClick={() => {
                        setIsNavOpen((pre) => !pre);
                        setDropdownIsOpen(false);
                      }}
                      className="mr-2"
                    >
                      Login
                    </Link>{' '}
                    /{' '}
                    <Link
                      to={'/register'}
                      onClick={() => {
                        setIsNavOpen((pre) => !pre);
                        setDropdownIsOpen(false);
                      }}
                      className="ml-2"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
