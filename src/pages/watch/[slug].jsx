import Layout from "../../components/layout"
import { withRouter } from 'next/router'
import { VideoPlayer } from "../../components/VideoPlayer";
import { DiscussionEmbed } from 'disqus-react';

const Watch = () => {
   return (
      <Layout>
         <section className="text-gray-400 bg-gray-800 rounded-lg body-font mb-3">
            <div className="block w-full md:flex ">
               <VideoContainer />
            </div>
         </section>
         <section className="text-gray-400 bg-gray-800 rounded-lg body-font mb-3 p-3">
            <DiscussionEmbed shortname='sektekomik-com-1' />
         </section>
      </Layout>
   )
}

const VideoContainer = () => {
   return (
      <div className="w-full">
         <VideoPlayer />
      </div>
   )
}

export default withRouter(Watch)
