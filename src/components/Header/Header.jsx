import Image from 'next/image'
import { useWindowSize } from '../../hooks/window'
import SearchBar from './Search'

/**
 * Header Component
 * @returns JSX.IntrinsicElements.nav
 */
const Header = () => {
   const window = useWindowSize()
   
   return (
      <header className="text-gray-400 bg-gray-900 body-font" id="header">
         <div className="flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
            {window.width <= 800 ? (<Image src='/logo_panjang.png' width={300} height={120} />) : (<Image src='/logo_3.png' width={120} height={120} />) }
            <HeaderItem />
            <SearchBar />
         </div>
      </header>
   )
}

/**
 * Item For Each Navbar
 * @returns JSX.IntrinsicElements.nav
 */
const HeaderItem = () => {
   return (
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
         <a className="mr-5 hover:text-white cursor-pointer font-bold">Home</a>
         <a className="mr-5 hover:text-white cursor-pointer font-bold">Genres</a>
         <a className="mr-5 hover:text-white cursor-pointer font-bold">Popular</a>
         <a className="mr-5 hover:text-white cursor-pointer font-bold">Donghua</a>
         <a className="mr-5 hover:text-white cursor-pointer font-bold">Jadwal Rilis</a>
      </nav>
   )
}


export default Header