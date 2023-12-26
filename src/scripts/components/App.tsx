import Intro from './Intro';
import Face from './Face';
import Anim from './Anim.jsx';
import Projects from './Projects';
import GlobeModel from './GlobeModel';
import Img1 from '../../assets/project1.svg';

function App() {
  return (
    <>
      <Intro />
      <Face />
      <Projects />
      <div className='showcase-div'>
        <div className='w-2/3 2xl:w-1/2;'>
          Some of the Shufflez NFTs
        </div>
      </div>
      <div>
        <img src={Img1} className="image" alt="Shufflez NFTs" />
      </div>
      <div className='showcase-div'>
        <div className='w-2/4 2xl:w-1/2;'>
          Places I've lived using Blender
        </div>
      </div>
      <GlobeModel />
      {/* <div className='showcase-div'>
        <div className='w-2/4 2xl:w-1/2;'>
          A cool web animation
        </div>
      </div>
      <Anim /> */}
    </>
  )
}

export default App
