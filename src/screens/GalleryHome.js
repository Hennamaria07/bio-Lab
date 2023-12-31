import React ,{useState,useEffect} from 'react'
import { AiOutlineLeft, AiOutlineRight ,AiOutlineClose} from "react-icons/ai"

import { gallery } from '../data/Data';
const GalleryHome = () => {

    const [showViewer, setShowViewer] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [groupedArray, setGroupedArray] = useState([]);

  
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
  
    useEffect(() => {
      const importAll = (r) => {
        return r.keys().map(r);
      };
    
      const galleryImages = importAll(require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/));
    
      setGroupedArray(galleryImages);
    }, []);



  return (
    <>
    <div className="container d-flex justify-content-center">
    <div className="image-gallery" style={{gap:'6px',borderRadius:'0px',paddingBottom:'16px'}}>
    {groupedArray.map((data, index) => {
        if(index <= 5){
            return (
                <div key={index} className='image-grid' onClick={() => openViewer(index)}>
                    <img src={data} alt="" style={{borderRadius:'0px'}}/>
                    {/* <div className="overlay"><span>{data.title}</span></div> */}
              </div>            
            );
        } 
      })}

    </div>


    {/* {showViewer && (
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

export default GalleryHome