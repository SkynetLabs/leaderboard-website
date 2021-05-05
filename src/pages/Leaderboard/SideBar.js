import { Fragment } from "react";
import MySkyButton from "../../components/MySkyButton";
import UserProfileCard from "../../components/UserProfileCard";
import { Dialog, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import {
  CubeTransparentIcon,
  CollectionIcon,
  UserGroupIcon,
  // UserIcon,
  XIcon,
  ArrowCircleLeftIcon,
  // GiftIcon,
} from "@heroicons/react/outline";
import { ReactComponent as Logo } from "../../svg/LogoWhiteText.svg";
import Link from "../../components/Link";

const navigation = [
  // { name: "MySky Profile", to: "/leaderboard/profile", icon: UserIcon },
  { name: "Skapp ranking", to: "/leaderboard", icon: CubeTransparentIcon },
  { name: "Content ranking", to: "/leaderboard/content", icon: CollectionIcon },
  { name: "User ranking", to: "/leaderboard/user", icon: UserGroupIcon },
  // { name: "Prizes", to: "/leaderboard/prizes", icon: GiftIcon },
];

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-palette-600">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <Logo className="h-8 w-auto" />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      exact={true}
                      activeClassName="active"
                      className="group flex items-center px-2 py-2 text-base font-medium rounded-md nav-link"
                    >
                      <item.icon className="mr-4 h-6 w-6" aria-hidden="true" />
                      {item.name}
                    </NavLink>
                  ))}
                  <div className="flex p-4 pt-4">
                    <UserProfileCard />
                  </div>
                </nav>
                <div className="flex-shrink-0 flex border-t border-palette-500 p-4">
                  <MySkyButton />
                </div>
                <div className="mt-5 px-2 space-y-1">
                  <Link
                    to="/"
                    className="group flex flex-grow items-center px-2 py-2 text-base font-medium rounded-md nav-link"
                  >
                    <ArrowCircleLeftIcon className="mr-4 h-6 w-6" aria-hidden="true" /> Homepage
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden bg-palette-600 lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Logo className="h-8 w-auto" />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    exact={true}
                    activeClassName="active"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md nav-link"
                  >
                    <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
                    {item.name}
                  </NavLink>
                ))}
                <div className="flex p-4 pt-12">
                  <UserProfileCard />
                </div>
              </nav>
              <div className="flex-shrink-0 mt-32 flex border-t border-palette-500 p-4">
                <MySkyButton />
              </div>
              <div className="flex-shrink-0 flex border-t border-palette-500 p-4">
                <Link
                  to="/"
                  className="group flex flex-grow items-center px-2 py-2 text-base font-medium rounded-md nav-link"
                >
                  <ArrowCircleLeftIcon className="mr-4 h-6 w-6" aria-hidden="true" /> Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
