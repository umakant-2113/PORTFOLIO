import React, { useState } from 'react';
import { VscGithub } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';
import { TbChevronsLeft } from 'react-icons/tb';
import { TbChevronsRight } from 'react-icons/tb';

let projects = [
  {
    id: 0,
    img: 'blog-app.png',
    title: 'Blog App',
    discription:
      'This is a blog application, having all functionalities related to a blog app.',
    tags: ['react', 'react-router', 'jsx', 'css'],
    repolink: 'https://github.com/umakant-2113/BlogApp',
    livelink: 'https://conduit-app-livid.vercel.app',
  },
  {
    id: 1,
    img: 'mi.png',
    title: 'Mi Store',
    discription: 'This is a MI STore application ',
    tags: ['react', 'react-router', 'jsx', 'css'],
    repolink: 'https://github.com/umakant-2113/MiStore',
    livelink: 'https://clever-semifreddo-24b50f.netlify.app/',
  },
  {
    id: 2,
    img: 'quiz.png',
    title: 'Quiz-App',
    discription:
      'This is a Quiz application, In which a user can play quiz after that can show his result.',
    tags: ['react', 'react-router', 'css', 'jsx'],
    repolink: 'https://github.com/umakant-2113/Quiz-App',
    livelink: 'https://stunning-croissant-f4bde1.netlify.app',
  },
  {
    id: 3,
    img: 'tictok.png',
    title: 'Tic-Toc-Toe',
    discription:
      'This is a Tic-Toc-Toe application, Can play as a single-user and can also play with computer',
    tags: ['react', 'react-router', 'css', 'jsx'],
    repolink: 'https://github.com/umakant-2113/Tik-Tok-Toe-ass',
    livelink: 'https://unique-smakager-9421d9.netlify.app/',
  },
  {
    id: 4,
    img: 'github-battel.png',
    title: 'Github-Battel',
    discription:
      'This is aGithub-Battel application, having all functionalities related to a Github-Battel.',
    tags: ['react', 'react-router', 'css', 'jsx'],
    repolink: 'https://github.com/umakant-2113/Git-Hub-Battel',
    livelink: 'https://astonishing-fenglisu-226aae.netlify.app',
  },
  {
    id: 5,
    img: 'shooping.png',
    title: 'Shooping-Cart',
    discription:
      'This is a Shooping-Cart application,In which a user can also do shopping, after that he can check his total amount.',
    tags: ['react', 'react-router', 'css', 'jsx'],
    repolink: 'https://github.com/umakant-2113/React-shooping-Cart',
    livelink: 'https://kaleidoscopic-bienenstitch-0c11fe.netlify.app/',
  },
  {
    id: 6,
    img: 'timer.png',
    title: 'Timmer-App',
    discription:
      'This is a Timmer application,in which a user can set a stopwatch and counter ',
    tags: ['react', 'react-router', 'css', 'jsx'],
    repolink: 'https://github.com/umakant-2113/Counter-Watch-App',
    livelink: 'https://fluffy-naiad-c1c8ae.netlify.app/',
  },
  {
    id: 7,
    img: 'monthly.png',
    title: 'Monthly-Activity',
    discription:
      'This is a Monthly-Activity  application, in which he can set his entire months activity.',
    tags: ['react', 'react-router', 'css', 'jsx'],
    repolink: 'https://github.com/umakant-2113/Monthly-Activity-Tracker',
    livelink: 'https://musical-unicorn-97d03e.netlify.app/',
  },
  {
    id: 8,
    img: 'PortFolio.png',
    title: 'Portfolio',
    discription: 'This is a portFolio application .',
    tags: ['html', 'css', 'java script', 'react'],
    repolink: 'https://github.com/umakant-2113/PORTFOLIO',
    livelink: 'https://portfolio-delta-ten-72.vercel.app',
  },
  {
    id: 9,
    img: 'conduitapi.jpg',
    title: 'Conduit API',
    discription: 'This is an API for Blog applications like Medium.',
    tags: ['node.js', 'express.js', 'mongodb', 'jwt'],
    repolink: 'https://github.com/umakant-2113/Conduit-API',
    livelink: 'https://github.com/umakant-2113/Conduit-API/blob/main/README.md',
  },

  {
    id: 10,
    img: 'expanseT.png',
    title: 'Expense Tracker',
    discription: 'This is an SSR Expense management application',
    tags: ['express.js', 'mongodb', 'ejs', 'oauth'],
    repolink: 'https://github.com/umakant-2113/ExpenseTracker',
    livelink: 'https://u-expense-tracker.herokuapp.com',
  },
  {
    id: 11,
    img: 'podcast.png',
    title: 'Podcast',
    discription:
      'This is an SSR Podcast application with different subscriptions.',
    tags: ['node.js', 'express.js', 'mongodb', 'ejs'],
    repolink: 'https://github.com/umakant-2113/PodCast',
    livelink: 'https://u-podcast.herokuapp.com',
  },

  {
    id: 12,
    img: 'yogaflex.png',
    title: 'YogaLex',
    discription: 'This is responsive and adaptive static website for Yoga.',
    tags: ['html', 'scss', 'css', 'javascript'],
    repolink: 'https://github.com/umakant-2113/YogaLex',
    livelink: 'https://dazzling-rabanadas-4052dc.netlify.app/',
  },
  {
    id: 13,
    img: 'Unitech.jpg',
    title: 'UniTech',
    discription:
      'This is responsive and adaptive static website for Businesses.',
    tags: ['html', 'scss', 'css'],
    repolink: 'https://github.com/umakant-2113/UniTech',
    livelink: 'https://jolly-dodol-cdb907.netlify.app',
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
    console.log(arr);
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
      <section className='projects' id='projects'>
        <h2>Projects</h2>
        <div className='project-box mn-sm-center '>
          {frontProjects.map((item, index) => {
            return (
              <div
                className='flex-30 project-item sm-flex-45 mn-sm-bet'
                key={index}
              >
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
                        {item.tags.includes('css') ? <FaEye /> : ''}{' '}
                      </a>
                    </abbr>
                  </div>
                </div>
              </div>
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
