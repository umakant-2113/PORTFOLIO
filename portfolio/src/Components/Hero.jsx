import React from 'react';

export default function Hero() {
  return (
    <>
      <section class='hero container flex'>
        <article class='flex sm-column'  style={{alignItems:'center'}}>
          <div >
            <h1 style={{textTransform: 'capitalize'}}>
              Hey There!<p>✋</p>
            </h1>
            <h1
              style={{
                textTransform: 'capitalize',
                paddingTop: '1rem',
                marginBottom: '-.5rem',
              }}
            >
              {' '}
              I am
            </h1>
            <h2 style={{ fontWeight: 'bold' }}>
              Umakant <br /> <small>Rajput</small>
            </h2>
            <h3>
              <a href='#'>
                <i class='fas fa-caret-right'> </i> Full Stack Web Developer
              </a>
            </h3>
            <ul class='display-flex'>
              <li>
                <a href='https://github.com/umakant-2113' class='social-icon'>
                  <i class='fab fa-github'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/umakant-rajput-15b555225/'
                  class='social-icon'
                >
                  <i class='fab fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/Umakqntraj' class='social-icon'>
                  <i class='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='mailto:umakantcoder143@gmail.com' class='social-icon'>
                  <i class='fa-solid fa-envelope'></i>
                </a>
              </li>
              <li>
                <a href='tel: 7275177116' class='social-icon'>
                  <i class='fa-sharp fa-solid fa-phone'> </i>
                </a>
              </li>
            </ul>
          </div>
          <figure style={{ paddingTop: '3rem'}}>
            <img  src='./assets/docs/Umakant.png' alt='Umakant' />
          </figure>
        </article>
      </section>
    </>
  );
};
