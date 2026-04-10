import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/content';

const Navbar = () => {
  return (
    <header className="px-3 sm:px-4 pt-4 sm:pt-6">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 rounded-full bg-black px-4 sm:px-6 py-3 sm:py-4 text-white shadow-lg">

        <div className="flex items-center gap-4 sm:gap-8 flex-wrap">
          <span className="rounded-full bg-orange-500 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
            Home
          </span>

          {NAV_ITEMS.slice(1, 3).map((item) => (
            <Link key={item} href="#" className="text-xs sm:text-sm hover:text-orange-400">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white text-xs sm:text-base">
            JC
          </div>
          <span className="text-base sm:text-lg font-bold text-white">JCREA</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          {NAV_ITEMS.slice(3).map((item) => (
            <Link key={item} href="#" className="text-xs sm:text-sm hover:text-orange-400">
              {item}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;