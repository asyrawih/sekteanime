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
   return (
      <div className="w-full">
         <ReactJWPlayer
            playerId="jw-player"
            playerScript="https://content.jwplatform.com/libraries/jvJ1Gu3c.js"
            playlist="https://cdn.jwplayer.com/v2/media/gaCRFWjn"
            onBeforePlay={() => console.log("onBeforePlay fired!")}
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