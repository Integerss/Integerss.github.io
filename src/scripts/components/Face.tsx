import { useEffect, useState } from "react";
import image1 from '../../assets/img7-face.png'
import image2 from '../../assets/img8-face-sketch.png'

export default function Face() {
  const [x, setX] = useState(0);

  useEffect(
    () => {
      const update = (e:any) => {
        setX(e.x);
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)

      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    }, [setX]
  ) 


  return (
    <>
      <img 
        className='face-bg' 
        src={x >= innerWidth/2 ? image2 : image1}
      />
    </>
  )
}