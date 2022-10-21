import React from 'react';

import { SiVisualstudio } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import { FaGithubSquare } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { TbBrandTailwind } from 'react-icons/tb';
import { GrHeroku } from 'react-icons/gr';
import { SiVercel } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';

function Tools() {
  return (
    <div>
      <section id='tools' style={{ backgroundColor: '#303030' }}>
        <h2>Tools </h2>
        <div>
          <figure className='figure2'>
            <SiVisualstudio />
            <figcaption>VS Code</figcaption>
          </figure>

          <figure className='figure2'>
            <SiNpm />
            <figcaption>NPM</figcaption>
          </figure>

          <figure className='figure2'>
            <FaGitAlt />
            <figcaption>Git</figcaption>
          </figure>

          <figure className='figure2'>
            <FaGithubSquare />
            <figcaption>Github</figcaption>
          </figure>

          <figure className='figure2'>
            <SiMongodb />
            <figcaption>Atlas</figcaption>
          </figure>

          <figure className='figure2'>
            <TbBrandTailwind />
            <figcaption>Tailwind</figcaption>
          </figure>

          <figure className='figure2'>
            <GrHeroku />
            <figcaption>Heroku</figcaption>
          </figure>

          <figure className='figure2'>
            <SiVercel />
            <figcaption>Vercel</figcaption>
          </figure>

          <figure className='figure2'>
            <SiFirebase />
            <figcaption>Firebase</figcaption>
          </figure>

          <figure className='figure2'>
            <SiNetlify />
            <figcaption>Netllify</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Tools;
