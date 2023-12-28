import Intro from './Intro';
import Face from './Face';
import Projects from './Projects';
import GlobeModel from './GlobeModel';
import Img1 from '../../assets/project1.svg';

function App() {
  return (
    <>
      <Intro />
      <Face />
      <Projects />
      <div>
        <img src={Img1} className="image" alt="Shufflez NFTs" />
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
