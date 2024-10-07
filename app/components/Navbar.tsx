import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="py-2 lg:py-0 z-10 sticky top-0 flex justify-center shadow bg-white">
      <div className="navbar bg-base-100 py-2 px-6 lg:max-w-[90rem]">
        <div className="flex-1">
          <Link href="/" className="text-2xl font-extrabold">Where in the world?</Link>
        </div>
        <div className="flex-none">
          <button className="flex items-center gap-x-2">
            <FontAwesomeIcon className='w-4' icon={faMoon} />
            <span className='font-semibold text-lg'>Dark mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
