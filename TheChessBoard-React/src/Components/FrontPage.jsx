import '../css/FrontPage.css';
import me from '../assets/me.jpeg';
import { useState } from 'react';

export default function FrontPage() {
  let [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    onclick = setIsVisible(!isVisible);
  }

  return (
    <>
      <div className='mainDiv'>
        <div className='introDiv'>
          <p className='Intro'>
            B-roll refers to supplemental or alternative footage that is
            intercut with the main shot in a film or video production. It is
            often used to enrich the storytelling, providing additional context,
            visual variety, or coverage.
          </p>
        </div>
        <div className="pictureDiv">
          <figure onClick={handleClick} className='polaroid'>
            <img src={me} alt='Polaroid Picture' />
            <figcaption className='meDescription'>
              Vibes be vibing <br></br>Aug 24
            </figcaption>
            {isVisible ? (
              <p className='Intro1'>
                It is in these behind-the-scenes moments that shape who I am.
                It’s in these everyday experiences, quiet reflections, and
                unpolished thoughts where any real story unfolds. While the big
                milestones might be the A-roll, it’s the little details, the
                candid moments, and the personal reflections—the B-roll—that
                tell the full story of how I am me...
              </p>
            ) : null}
          </figure>
        </div>
      </div>
    </>
  );
}
