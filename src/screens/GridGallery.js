import React ,{useState,useEffect} from 'react'
import { AiOutlineLeft, AiOutlineRight ,AiOutlineClose} from "react-icons/ai"
import "./gallery.css"
import { gallery } from '../data/Data';
const GridGallery = () => {

    const [showViewer, setShowViewer] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [images, setImages] = useState([]);
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
  
  // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    // var groupedArray = [];
    // for (var i = 0; i < gallery.length; i += 6) {
    //   groupedArray.push(gallery.slice(i, i + 6));
    // }
    // console.log(groupedArray)
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
useEffect(() => {
  const importAll = (r) => {
    return r.keys().map(r);
  };

  const galleryImages = importAll(require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/));
  setImages(galleryImages)
  var tempGroupedArray = [];
  for (var i = 0; i < galleryImages.length; i += 6) {
    tempGroupedArray.push(galleryImages.slice(i, i + 6));
  }

  setGroupedArray(tempGroupedArray);
}, []);

  return (
    <>
    <div class="container d-flex justify-content-center">
    <div class="image-gallery">
    {groupedArray.map((innerArray, outerIndex) => (
    <div class="angry-grid" key={outerIndex}>


    {innerArray.map((data, index) => {
          if(index<6){
            const dynamicClassName = `item-${index}`;
            return (
          <div id={dynamicClassName} onClick={() => openViewer(outerIndex)}>
              <img src={data} alt="photo" />
              {/* <div class="overlay"><span>{data.title}</span></div> */}
          </div>
              );
            }
          })}

</div>
))}

</div>




  </div>

    {showViewer && (
        <div className="image-viewer">
          <span className="close-button" onClick={closeViewer}>
            <AiOutlineClose />
          </span>
          <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
          <button onClick={prevImage} className="prev-button">
            <AiOutlineLeft />
          </button>
          <button onClick={nextImage} className="next-button">
            <AiOutlineRight />
          </button>
        </div>
      )}

</>
  )
}

export default GridGallery;






{/* <div class="angry-grid">
            <div id="item-0">
                <img src="https://source.unsplash.com/1280x720/?nature" alt="Phto"/>
            </div>
            <div id="item-1">
                <img src="https://source.unsplash.com/1280x720/?food" alt="Phto"/>
            </div>
            <div id="item-2">
                <img src="https://source.unsplash.com/1280x720/?building" alt="Phto"/>
            </div>
            <div id="item-3">
                <img src="https://source.unsplash.com/1280x720/?nature" alt="Phto"/>
            </div>
            <div id="item-4">
                <img src="https://source.unsplash.com/1280x720/?building" alt="Phto"/>
            </div>
            <div id="item-5">
                <img src="https://source.unsplash.com/1280x720/?food" alt="Phto"/>
            </div>
          </div>
 */}
