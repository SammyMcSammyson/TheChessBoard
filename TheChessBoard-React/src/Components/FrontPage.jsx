import '../css/FrontPage.css';
import me from '../assets/me.jpeg';
import flyingtothemoon from '../assets/FlyingtoTheMoon.jpg';
import ITried from '../assets/ITried.jpg';
import { useState } from 'react';

export default function FrontPage() {
  let [isVisible, setIsVisible] = useState(false);
  const [isVisibleFlying, setIsVisibleFlying] = useState(false);
  const [isVisibleTried, setIsVisibleTried] = useState(false);

  function handleClick() {
    onclick = setIsVisible(!isVisible);
  }

  function handleClick2() {
    onclick = setIsVisibleFlying(!isVisibleFlying);
  }

  function handleClick3() {
    onclick = setIsVisibleTried(!isVisibleTried);
  }

  return (
    <>
      <div className='mainDiv'>
        <div className='introDiv'>
          <p className='Intro'>
            If life were a film, the milestones and highlights would be the
            A-roll—the polished, front-and-center moments. But here, we are
            focusing on the B-roll. It is the behind-the-scenes footage, the
            candid shots, and the unfiltered moments that often go unnoticed but
            truly tell the full story.
          </p>
        </div>
        <div className='PictureContainer'>
          <div className='pictureDiv'>
            <figure onClick={handleClick} className='polaroid'>
              <img src={me} alt='Polaroid Picture' />
              <figcaption className='meDescription'>
                Vibes be vibing <br></br> Aug 24
              </figcaption>
              {isVisible ? (
                <p className='Intro1'>
                  It is in these behind-the-scenes moments that shape who I am.
                  It’s in these everyday experiences, quiet reflections, and
                  unpolished thoughts where any real story unfolds.
                </p>
              ) : null}
            </figure>
          </div>

          <div className='pictureDiv secondDiv'>
            <figure onClick={handleClick2} className='polaroid second'>
              <img src={flyingtothemoon} alt='Polaroid Picture' />
              <figcaption className='meDescription'>
                Flying to the Moon <br></br>  Feb 24
              </figcaption>
              {isVisibleFlying ? (
                <p className='Intro2'>
                  While the big milestones might be the A-roll, it’s the little
                  details, the candid moments, and the personal reflections—the
                  B-roll—that tell the full story of how I am me...
                </p>
              ) : null}
            </figure>
          </div>

          <div className='pictureDiv thirdDiv'>
            <figure onClick={handleClick3} className='polaroid third'>
              <img src={ITried} alt='Polaroid Picture' />
              <figcaption className='meDescription'>
                Proffesional Debut <br></br>  Jan 23
              </figcaption>
              {isVisibleTried ? (
                <p className='Intro3'>
                  Ultimately, these everyday moments come together to tell my
                  story, with each one reflecting a part of my experience. They
                  remind me that being open and honest about my life is
                  important. By sharing these moments—flaws and all—I can show
                  others the true nature of who I am.
                </p>
              ) : null}
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
