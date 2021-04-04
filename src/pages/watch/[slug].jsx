import Layout from "../../components/layout"
import { withRouter } from 'next/router'
import ReactJWPlayer from "react-jw-player";


const Watch = () => {
   return (
      <Layout>
         <section className="text-gray-400 bg-gray-800 rounded-lg body-font mb-3">
            <div className="block w-full md:flex  justify-between">
               <VideoContainer />
               <EpisodeContainer />
            </div>
         </section>
      </Layout>
   )
}


const VideoContainer = () => {

   const vidoeLoaded = () => {
      alert('video loaded')
   }

   return (
      <div className="w-full">
         <ReactJWPlayer
            playerId="Gacrfwjn-tnprujid"
            playerScript="https://cdn.jwplayer.com/libraries/wzfX1mmj.js"
            file="http://s02.solidfilesusercontent.com/ZmM4MzVjMjExY2Y4NmNmYjRlYmFmZTRlOTRjZjhjYjVkY2Q4ZmJiOToxbFQwOFo6R0xvOVZyYWltQWxiTDN6MU9laGhWWjJ2Zjln/BVq4jw3mmW3Q5/%5BNekoPoi%5D_JK_Fuuzoku_Gakuensai_-_01_%5B720P%5D%5Bnekopoi.care%5D.mp4"
            onBeforePlay={() => console.log("onBeforePlay fired!")}
            onVideoLoad={vidoeLoaded}
         />
      </div>
   )
}

const EpisodeContainer = () => {
   return (
      <div className="bg-gray-800 w-full  md:w-80 rounded-r-lg p-2">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Officiis nobis maxime consequuntur at laborum corrupti reprehenderit labore delectus dolore consequatur!
      </div>
   )
}

export default withRouter(Watch)
