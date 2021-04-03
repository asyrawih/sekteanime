const Card = ({ images }) => {
   return (
      <div className="xl:w-1/6 md:w-1/3 w-1/2 p-4">
         <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full bg-cover object-fill rounded-lg hover:cursor-pointer" src={images} />
            <div className="flex justify-center h-48 xl:h-64 lg:h-64  z-10 w-full border-4 items-center border-gray-800 bg-gray-900 opacity-0 hover:opacity-60 cursor-pointer ">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height={60} width={60} className="fill-current" >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
               </svg>
            </div>
         </div>
         <h3 className="font-bold text-white mt-1">Video Name Here</h3>
         <h2 className="font-bold text-white">Episode 1</h2>
      </div>
   )
}

export default Card