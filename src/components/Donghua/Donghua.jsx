
const Donghua = () => {
   return (
      <section class="text-gray-400 bg-gray-900 body-font">
         <div class="container px-5 py-2 mx-auto">
            <h3 className="text-lg font-bold">Donghua</h3>
            <div class="flex flex-wrap -m-4">
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
            </div>
         </div>
      </section >
   )
}

const Card = () => {
   return (
      <div class="xl:w-1/6 md:w-1/3 sm:w-1/2 p-4">
         <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-lg hover:cursor-pointer" src="https://i1.wp.com/sektekomik.com/wp-content/uploads/2020/08/1610297384-picsayj-406421-dYS1212t.jpg?resize=165,225" />
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 cursor-pointer ">
               <h1 class="title-font text-lg font-medium text-white mb-3">Sinopis</h1>
               <p class="leading-relaxed text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis placeat quo aspernatur. Quidem odit amet molestiae repellat voluptatem molestias. Officiis!</p>
            </div>
         </div>
      </div>
   )
}

export default Donghua