import React, { useState } from 'react';

import { VscGithub } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';
import { TbChevronsLeft } from 'react-icons/tb';
import { TbChevronsRight } from 'react-icons/tb';

let projects = [
  {
    id: 0,
    img: 'stimules.jpg',
    title: 'Blog App',
    discription:
      'This is a blog application, having all functionalities related to a blog app.',
    tags: ['react', 'react-router', 'jsx', 'css'],
    repolink: 'https://github.com/umakant-2113/BlogApp',
    livelink: 'https://blog-app-two-chi.vercel.app',
  },
  {
    id: 1,
    img: 'stimules.jpg',
    title: 'Booking App',
    discription:
      'This is a booking application, having all functionalities related to a booking app.',
    tags: ['react', 'react-router', 'redux', 'jsx'],
    repolink: 'https://github.com/umakant-2113/BookingApp',
    livelink: 'https://booking-app-plum.vercel.app',
  },
  {
    id: 2,
    img: 'conduitapi.jpg',
    title: 'Conduit API',
    discription: 'This is an API for Blog applications like Medium.',
    tags: ['node.js', 'express.js', 'mongodb', 'jwt'],
    repolink: 'https://github.com/umakant-2113/Conduit-API',
    livelink: 'https://github.com/umakant-2113/Conduit-API/blob/main/README.md',
  },
  {
    id: 3,
    img: 'communityapi.jpg',
    title: 'Community API',
    discription:
      'This is an API for Community applications like Stack Overflow.',
    tags: ['node.js', 'express.js', 'mongodb', 'jwt'],
    repolink: 'https://github.com/umakant-2113/Community-API',
    livelink:
      'https://github.com/umakant-2113/Community-API/blob/main/README.md',
  },
  {
    id: 4,
    img: 'yogaflex.png',
    title: 'Expense Tracker',
    discription: 'This is an SSR Expense management application',
    tags: ['express.js', 'mongodb', 'ejs', 'oauth'],
    repolink: 'https://github.com/umakant-2113/ExpenseTracker',
    livelink: 'https://u-expense-tracker.herokuapp.com',
  },
  {
    id: 5,
    img: 'stimules.jpg',
    title: 'Podcast',
    discription:
      'This is an SSR Podcast application with different subscriptions.',
    tags: ['node.js', 'express.js', 'mongodb', 'ejs'],
    repolink: 'https://github.com/umakant-2113/PodCast',
    livelink: 'https://u-podcast.herokuapp.com',
  },

  {
    id: 6,
    img: 'yogaflex.png',
    title: 'YogaLex',
    discription: 'This is responsive and adaptive static website for Yoga.',
    tags: ['html', 'scss', 'css', 'javascript'],
    repolink: 'https://github.com/umakant-2113/YogaLex',
    livelink: '',
  },
  {
    id: 7,
    img: 'Unitech.jpg',
    title: 'UniTech',
    discription:
      'This is responsive and adaptive static website for Businesses.',
    tags: ['html', 'scss', 'css'],
    repolink: 'https://github.com/umakant-2113/UniTech',
    livelink: '',
  },
];

function Projects() {
  let num;
  if (window.outerWidth <= 480) {
    num = 1;
  } else if (window.outerWidth > 480 && window.outerWidth <= 768) {
    num = 2;
  } else {
    num = 3;
  }
  const [count, setCount] = useState(0);
  const [frontProjects, setFrontProjects] = useState(() => {
    let arr = [];
    for (let i = count; i < count + num; i++) {
      arr.push(projects[i]);
    }
    return arr;
  });

  function handleLeft() {
    setCount((prevState) => {
      if (count > 0) {
        return prevState - 1;
      } else {
        return 0;
      }
    });
    setFrontProjects((prevState) => {
      let arr = [];
      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }
      return arr;
    });
  }

  function handleRight() {
    setCount((prevState) => {
      if (count < projects.length - num) {
        return prevState + 1;
      } else {
        return projects.length - num;
      }
    });

    setFrontProjects((prevState) => {
      let arr = [];
      for (let i = count; i < count + num; i++) {
        arr.push(projects[i]);
      }
      return arr;
    });
  }

  return (
    <>
      <section class='projects' id='projects'>
        <h2>Projects</h2>
        <div className='project-box mn-sm-center '>
          {frontProjects.map((item) => {
            return (
              <>
                <div className='flex-30 project-item sm-flex-45 mn-sm-bet '>
                  <div>
                    <figure className='figure'>
                      <img
                        className='full-width'
                        src={`./assets/projects/${item.img}`}
                        alt=''
                      />
                    </figure>
                    <h3 className='project-name'> {item.title}</h3>
                    <p className='discription'>{item.discription} </p>
                    <div className='tag-box'>
                      {item.tags.map((tag) => {
                        return <p> {tag.toUpperCase()}</p>;
                      })}
                    </div>
                    <div className='repolink-box'>
                      <abbr title='Go To Repository'>
                        {' '}
                        <a href={`${item.repolink}`} target='blank'>
                          <VscGithub />
                        </a>
                      </abbr>
                      <abbr title='Go To Live Demo'>
                        <a href={`${item.livelink}`} target='blank'>
                          <FaEye />{' '}
                        </a>
                      </abbr>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <TbChevronsLeft
          className='left sm-left mn-left '
          onClick={handleLeft}
        />
        <TbChevronsRight
          className='right  sm-right mn-right'
          onClick={handleRight}
        />
      </section>
    </>
  );
}

export default Projects;
