import { Component } from 'react'
import { Player, ControlBar, BigPlayButton } from 'video-react'

const sources = {
   server1: 'https://www33.zippyshare.com/d/jwgaPeW4/630076/%5bNekoPoi%5d_JK_Fuuzoku_Gakuensai_-_01_%5b720P%5d%5bnekopoi.care%5d.mp4',
   server2: 'https://drive.kresendo.my.id/0:/Pribadi/24ID026HI10P%5Bcmpfans%5D.mkv',
   server3: 'http://s02.solidfilesusercontent.com/ZmM4MzVjMjExY2Y4NmNmYjRlYmFmZTRlOTRjZjhjYjVkY2Q4ZmJiOToxbFQwOFo6R0xvOVZyYWltQWxiTDN6MU9laGhWWjJ2Zjln/BVq4jw3mmW3Q5/%5BNekoPoi%5D_JK_Fuuzoku_Gakuensai_-_01_%5B720P%5D%5Bnekopoi.care%5D.mp4',
   server4: 'http://media.w3.org/2010/05/video/movie_300.webm'
};


class VideoPlayer extends Component {
   constructor(props, context) {
      super()
      this.state = {
         source: sources.server3
      }
      this.load = this.load.bind(this);
   }

   componentDidMount() {
      // subscribe state change
      this.player.subscribeToStateChange(this.handleStateChange.bind(this));
      this.load = this.load.bind(this);
   }

   handleStateChange(state) {
      // copy player state to this component's state
      this.setState({
         player: state
      });
   }

   load() {
      this.player.load();
   }

   changeSource(name) {
      return () => {
         this.setState({
            source: sources[name]
         });
         this.player.load();
      };
   }

   render() {
      return (
         <>
            <Player ref={player => { this.player = player }} autoHide={true} height={600} width={'100%'} fluid={false} >
               <source src={this.state.source} />
               <ControlBar />
               <BigPlayButton position='center' />
            </Player>
            <div className="flex justify-around">
               <button className="bg-red-500 text-white font-bold p-2 m-3 rounded-md" onClick={this.changeSource('server1')}>Server 1</button>
               <button className="bg-red-500 text-white font-bold p-2 m-3 rounded-md" onClick={this.changeSource('server2')}>Server 2</button>
               <button className="bg-red-500 text-white font-bold p-2 m-3 rounded-md" onClick={this.changeSource('server3')}>Server 3</button>
            </div>
         </>
      )
   }

}

export default VideoPlayer