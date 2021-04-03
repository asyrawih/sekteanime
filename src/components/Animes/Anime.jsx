import React from 'react'

const Animes = ({ anime }) => {

   const data = [1, 2, 3, 4, 5, 6]

   const images = [
      'https://i1.wp.com/sektekomik.com/wp-content/uploads/2020/08/420-341038-uuB10u6Z.jpeg?resize=165,225',
      'https://i0.wp.com/sektekomik.com/wp-content/uploads/2020/02/fe710002a25021f6e34e-906807-15BNQMmy.jpg?resize=165,225',
      'https://i1.wp.com/sektekomik.com/wp-content/uploads/2020/02/Reverse-Villain.jpg?resize=165,225',
      'https://i1.wp.com/sektekomik.com/wp-content/uploads/2020/08/cityofh-164498-QYjvzcq9.jpg?resize=165,225',
      'https://i2.wp.com/sektekomik.com/wp-content/uploads/2020/09/118319986-249341779482618-8182078446675755930-n-014826-MEMTIgAb.jpg?resize=165,225',
      'https://i1.wp.com/sektekomik.com/wp-content/uploads/2020/08/1jpg-smhmiddle-521025-H4TS9mFY.jpg?resize=165,225'
   ]

   return (
      <section className="text-gray-400 bg-gray-900 body-font">
         <div className="container px-5 py-2 mx-auto">
            <div className="flex flex-wrap -m-4">
               {data.map((_, index) => (
                  <Card key={index} images={images[index]} />
               ))}
            </div>
         </div>
      </section >
   )
}

const Card = ({ images }) => {
   return (
      <div className="xl:w-1/6 md:w-1/3 w-1/2 p-4">
         <div className="flex relative">
            <img alt="gallery" className="absolute inset-0 w-full h-full  object-cover rounded-lg hover:cursor-pointer" src={images} />
            <div className="h-48 xl:h-64 px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-60 cursor-pointer ">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
               </svg>
            </div>
         </div>
      </div>
   )
}

export default Animes