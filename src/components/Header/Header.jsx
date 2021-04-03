import Image from 'next/image'

/**
 * Header Component
 * @returns JSX.IntrinsicElements.nav
 */
const Header = () => {
   return (
      <header className="text-gray-400 bg-gray-900 body-font" id>
         <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Image src='/logo_3.png' width={120} height={120} />
            <HeaderItem />
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
         <a className="mr-5 hover:text-white cursor-pointer">Home</a>
         <a className="mr-5 hover:text-white cursor-pointer">Genres</a>
         <a className="mr-5 hover:text-white cursor-pointer">Popular</a>
         <a className="mr-5 hover:text-white cursor-pointer">Donghua</a>
         <a className="mr-5 hover:text-white cursor-pointer">Jadwal Rilis</a>
      </nav>
   )
}


export default Header