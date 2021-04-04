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
            file="https://www33.zippyshare.com/d/jwgaPeW4/630076/%5bNekoPoi%5d_JK_Fuuzoku_Gakuensai_-_01_%5b720P%5d%5bnekopoi.care%5d.mp4"
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
