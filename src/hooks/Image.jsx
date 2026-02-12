import { useState } from 'react';
import image from '../assets/image.png';
import image2 from '../assets/image2.png';
import Wrapper from '../components/Wrapper';
import Button from '../utility/Button';

const Image = () => {

    const [photo , setPhoto] = useState(image)

  return (
    <>
    <img className='w-100' src={photo} />
    <Button name={"Change Image"} onClick={() => setPhoto(image2)} />
    </>
  )
}

export default Image