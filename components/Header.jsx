import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Header() {
  const { data: session } = useSession();
  const [openModal, setOpenModal] = useRecoilState(modalState);
  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between mx-5 lg:mx-auto bg-white max-w-6xl ">
        {/* Left - Instagram logo  */}
        {/* Instagram logo */}
        <div
          onClick={() => router.push('/')}
          className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            objectFit="contain"
            layout="fill"
          />
        </div>
        {/* Instagram text */}
        <div
          onClick={() => router.push('/')}
          className="relative w-24 hidden lg:inline-grid cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>

        {/* Middle  - Search Input Field */}
        <div className="max-w-xl">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute pl-3 inset-y-0 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push('/')} />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className=" relative navBtn">
                <div className="absolute -top-1 -right-2 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white text-xs w-5 h-5">
                  3
                </div>
                <PaperAirplaneIcon className="navBtn rotate-45" />
              </div>
              <PlusCircleIcon
                onClick={() => setOpenModal(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                src={session.user.image}
                onClick={signOut}
                alt="profile pic"
                className="h-10 rounded-full cursor-pointer w-10 object-cover"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
