import Layout from "../../components/layout"
import { withRouter } from 'next/router'
import { YoutubePlayer } from "reactjs-media";


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
         <YoutubePlayer
            src="https://youtu.be/UZCO5k1Nu70" // Reqiured
            width={'100%'}
            allowFullScreen={true}
            height={600}
         />
      </div>
   )
}

const EpisodeContainer = () => {
   return (
      <div className="bg-red-50 w-full  md:w-80 rounded-r-lg p-2">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Officiis nobis maxime consequuntur at laborum corrupti reprehenderit labore delectus dolore consequatur!
      </div>
   )
}

export default withRouter(Watch)