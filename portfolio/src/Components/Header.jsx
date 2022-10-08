import React from 'react';
export default function Header() {
  return (
    <>
      <header class='flex' id='top'>
        <ul>
          <li class='main-brand'>
            <a href='#'>
              {'<'} <strong>Umakant</strong> {'/>'}
            </a>
          </li>
        </ul>
        <label for='toggle' class='bar'>
          <i class='fas fa-bars'></i>
        </label>
        <input type='checkbox' id='toggle' />
        <nav class='nav'>
          <ul class='flex sm-column'>
            <li className='list'>
              <a href='#home'>Home</a>
            </li>

            <li className='list'>
              <a href='#about'>About</a>
            </li>

            <li className='list'>
              <a href='#skills'>Skills</a>
            </li>

            <li className='list'>
              <a href='#tool'>Tools</a>
            </li>

            <li className='list'>
              <a href='#projects'>Projects</a>
            </li>

            <li className='list'>
              <a href='#contact'>Contact</a>
            </li>

            <li class='active'>
              <a href='#'>
                Resume
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
