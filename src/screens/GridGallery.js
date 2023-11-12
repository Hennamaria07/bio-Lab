import React ,{useState} from 'react'
import { AiOutlineLeft, AiOutlineRight ,AiOutlineClose} from "react-icons/ai"
import "./gallery.css"
import { gallery } from '../data/Data';
const GridGallery = () => {

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
  

    // const chunkedArray = [];
    // for (let i = 0; i < peopleArray.length; i += 3) {
    //   chunkedArray.push(peopleArray.slice(i, i + 3));
    // }

    var groupedArray = [];
    for (var i = 0; i < gallery.length; i += 6) {
      groupedArray.push(gallery.slice(i, i + 6));
    }
    console.log(groupedArray)

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
          <div id={dynamicClassName}>
              <img src={data.img} alt="photo" />
              <div class="overlay"><span>{data.title}</span></div>
          </div>
              );
            }
          })}

</div>
))}

</div>




  </div>



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
