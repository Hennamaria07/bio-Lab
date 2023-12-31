import React from 'react'
import { publication } from '../data/Data';
import { AiFillCalendar,AiFillFilePdf ,AiOutlineGlobal} from 'react-icons/ai';

const Publication = () => {


  // Grouping publications by year
  const groupedPublications = publication.reduce((acc, pub) => {
    const year = pub.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});


  return (



    <section className="publication" id="publication">
      <div className="container-fluid" style={{ padding: '0% 10%' }}>
        <div className="row align-items-center justify-content-center">
          {Object.keys(groupedPublications).sort((a, b) => b - a).map((year) => (
            <div key={year} className="m-0 p-0">
                <div className='col-md-12 one'>
                    <h1>{year}</h1>
                </div>
              {groupedPublications[year].map((item, index) => (
                <div key={index} className="col-12 col-md-10 col-sm-12 publication-container ">
                  <div className="index-wrapper">
                    <h5>{index + 1}</h5>
                  </div>

                  <div className="content-wrapper">
                    <h5>{item.title}</h5>
                    {/* <div className="calender-wrapper">
                      <AiFillCalendar />
                      <p>&ensp;{item.year}</p>
                    </div> */}
                    <p>{item.dec}</p>
                    <div className="download-wrapper">
                      <div className="download-box pdf">
                        <AiFillFilePdf />
                        <a href={item.file} style={{ textDecoration: 'none' }}>
                          &ensp;{item.file ? `file1235.pdf` : 'No File Available'}
                        </a>
                      </div>
                      <div className="download-box site">
                        <AiOutlineGlobal />
                        <a href={item.link} style={{ textDecoration: 'none' }}>
                          &ensp;{item.link}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Publication