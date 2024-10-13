import me from '../assets/me.jpeg';
import Amsterdam from '../assets/Amsterdam.jpg';
import baller from '../assets/baller.jpg';
import buisness from '../assets/buisness.jpg';
import school from '../assets/school.jpg';
import tea from '../assets/tea.jpg';
import Uni from '../assets/Uni.jpg';
import Watermelon from '../assets/Watermelon.jpg';
import Vimal from '../assets/Vimal.jpg';
import house from '../assets/house.jpg';
import divorce from '../assets/divorce.gif';
import '../css/HowIBecameMe.css';
import data from '../../public/data.json';
import { useState } from 'react';

export default function HowIBecameMe() {
  let [isVisible, setIsVisible] = useState(Array(data.length).fill(false));

  // Handle click function to toggle visibility
  const handleClick = (index) => {
    console.log(data.length);
    let newVisibility = [...isVisible];
    newVisibility[index] = !newVisibility[index];
    setIsVisible(newVisibility);
    console.log(newVisibility[index]);
  };

  let images = {
    baller,
    buisness,
    school,
    me,
    tea,
    Uni,
    Vimal,
    house,
    Watermelon,
    Amsterdam,
    divorce,
    // Mapping keys to actual imported images
  };

  const circleArray = ['22%', '80%', '130%'];

  return (
    <>
      <h1 className='HowIBecameMeTitle'>How I became me</h1>

      <div className='timeline'>
        {circleArray.map((position, index) => (
          <div key={index} className='circle' style={{ top: position }}></div>
        ))}
      </div>

      <section className='design-section'>
        <div className='meSection'>
          {data.map((event, index) => (
            <div className={`containerBio ${event.alignment}`} key={index}>
              <figure
                onClick={() => handleClick(index)}
                className={`polaroid ${event.alignment} `}
              >
                <img
                  src={images[event.imgSrc]}
                  alt='Polaroid Picture'
                  className='HowIBecameMeImg'
                />
                <figcaption
                  className='meDescription'
                  dangerouslySetInnerHTML={{ __html: event.caption }}
                />
              </figure>
              {isVisible[index] ? (
                <div className='HowIBecameMeDescription'>
                  <p
                    className={`HowIBecameMeParagraph ${event.alignment1} ${event.className}`}
                  >
                    {event.description}
                  </p>
                </div>
              ) : (
                <div style={{ visibility: 'hidden', height: 'auto' }}>
                  <p className={`HowIBecameMeParagraph ${event.alignment1}`}>
                    {event.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
