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
      console.log('video loaded')
   }

   return (
      <div className="w-full">
         <ReactJWPlayer
            playerId="Gacrfwjn-tnprujid"
            playerScript="https://cdn.jwplayer.com/libraries/wzfX1mmj.js"
            playlist="https://cdn.jwplayer.com/v2/playlists/qg7ezNIV?search=__CONTEXTUAL__"
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
