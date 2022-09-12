import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { photos } from '../assets';

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="flex items-center justify-between border-b-2 border-gray-100 mb-4 lg:justify-start lg:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link to="#">
            <span className="sr-only">Deep Learning</span>
            <img className="h-10 w-auto sm:h-12" src={photos.Logo} alt="" />
          </Link>
        </div>
        <div className="-my-2 -mr-2 lg:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
          <Link
            to={'/'}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Deep Learning Datasets
          </Link>
          <Link
            to="/"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Training Materials
          </Link>
          <Link
            to="/"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Post/Find a Job
          </Link>
          <Link
            to="/"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Companies
          </Link>
        </Popover.Group>
        <div className="hidden items-center justify-end lg:flex lg:flex-1">
          <a
            href="https://www.linkedin.com/company/spatialcommand/"
            className="whitespace-nowrap font-bold text-black hover:text-gray-800"
          >
            in
          </a>
          <a
            href="mailto:hello@spatialcommand.com"
            className="whitespace-nowrap mx-2 text-base font-medium text-black hover:text-gray-800"
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
          |
          <Link
            to="#"
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
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="flex flex-col gap-y-4 gap-x-8">
                <Link
                  to={'/'}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Deep Learning Datasets
                </Link>
                <Link
                  to="/"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Training Materials
                </Link>
                <Link
                  to="/"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Post/Find a Job
                </Link>
                <Link
                  to="/"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Companies
                </Link>
                <div className="flex items-center justify-start">
                  <a
                    href="https://www.linkedin.com/company/spatialcommand/"
                    className="whitespace-nowrap mr-4 font-bold text-black hover:text-gray-800"
                  >
                    in
                  </a>
                  <a
                    href="mailto:hello@spatialcommand.com"
                    className="whitespace-nowrap mx-2 text-base font-medium text-black hover:text-gray-800"
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
