import React ,{useState} from 'react'
import { AiOutlineLeft, AiOutlineRight ,AiOutlineClose} from "react-icons/ai"

import { gallery } from '../data/Data';
const Gallery = () => {

    const [showViewer, setShowViewer] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
  
    const openViewer = (index) => {
      setCurrentImage(index);
      setShowViewer(true);
    };
  
    const closeViewer = () => {
      setShowViewer(false);
    };
  
    const nextImage = () => {
      setCurrentImage((currentImage + 1) % gallery.length);
    };
  
    const prevImage = () => {
      setCurrentImage((currentImage + gallery.length - 1) % gallery.length);
    };
  




  return (
    <>
    <div className="container d-flex justify-content-center">
    <div className="image-gallery">

    {gallery.map((data, index) => {
            return (
                <div key={index} className='image-grid' onClick={() => openViewer(index)}>
                    <img src={data.img} alt="" />
                    <div className="overlay"><span>{data.title}</span></div>
              </div>            );
          })}

    </div>

{/* 
    {showViewer && (
        <div className="image-viewer">
          <span className="close-button" onClick={closeViewer}>
            <AiOutlineClose />
          </span>
          <img src={gallery[currentImage].img} alt={`Image ${currentImage + 1}`} />
          <button onClick={prevImage} className="prev-button">
            <AiOutlineLeft />
          </button>
          <button onClick={nextImage} className="next-button">
            <AiOutlineRight />
          </button>
        </div>
      )} */}

  </div>



</>
  )
}

export default Gallery