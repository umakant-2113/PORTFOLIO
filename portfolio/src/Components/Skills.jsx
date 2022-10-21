import React from 'react';

import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { SiSass } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiSocketdotio } from 'react-icons/si';

function Skills() {
  return (
    <div id='skills'>
      <section id='tools' style={{ backgroundColor: 'black' }}>
        <h2>Tech Stack </h2>

        <div className='skils-box'>
          <figure className='figure1 '>
            <AiFillHtml5 />
            <figcaption>HTML 5</figcaption>
          </figure>

          <figure className='figure1  mn-flex-50'>
            <IoLogoCss3  />
            <figcaption>CSS 3</figcaption>
          </figure>

          <figure className='figure1'>
            <SiSass  />
            <figcaption>SCSS</figcaption>
          </figure>

          <figure className='figure1'>
            <SiJavascript  />
            <figcaption>JS</figcaption>
          </figure>

          <figure className='figure1'>
            <SiReact  />
            <figcaption>React</figcaption>
          </figure>

          <figure className='figure1'>
            <SiRedux  />
            <figcaption>Redux</figcaption>
          </figure>

          <figure className='figure1'>
            <SiMongodb  />
            <figcaption>Mongo DB</figcaption>
          </figure>

          <figure className='figure1'>
            <SiNodedotjs  />
            <figcaption>Node.js</figcaption>
          </figure>

          <figure className='figure1'>
            <SiExpress  />
            <figcaption>Express.js</figcaption>
          </figure>

          <figure className='figure1'>
            <SiSocketdotio   />
            <figcaption>Socket.io</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Skills;
