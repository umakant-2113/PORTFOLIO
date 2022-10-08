import React, { useState } from 'react';

import { VscGithub } from 'react-icons/vsc';
import { FaEye } from 'react-icons/fa';
import { TbChevronsLeft } from 'react-icons/tb';
import { TbChevronsRight } from 'react-icons/tb';

let projects = [
  {
    id: 0,
    img: 'stimules.jpg',
    title: 'Project Name1',
    discription: 'About Of Project1',
    tags: ['html', 'css'],
    view: ['repolink', 'Live Link'],
  },
  {
    id: 1,
    img: 'theory.jpg',
    title: 'Project Name2',
    discription: 'About Of Project2',
    tags: ['html', 'css'],
    view: ['repolink', 'Live Link'],
  },
  {
    id: 2,
    img: 'Trackl.jpg',
    title: 'Project Name3',
    discription: 'About Of Project3',
    tags: ['html', 'css'],
    view: ['repolink', 'Live Link'],
  },
  {
    id: 3,
    img: 'unitech.jpg',
    title: 'Project Name4',
    discription: 'About Of Project4',
    tags: ['html', 'css'],
    view: ['repolink', 'Live Link'],
  },
  {
    id: 4,
    img: 'yogaflex.png',
    title: 'Project Name5',
    discription: 'About Of Project5',
    tags: ['html', 'css'],
    view: ['repolink', 'Live Link'],
  },
  {
    id: 5,
    img: 'stimules.jpg',
    title: 'Project Name6',
    discription: 'About Of Project6',
    tags: ['html', 'css'],
    view: ['repolink', 'Live Link'],
  },
  {
    id: 6,
    img: 'stimules.jpg',
    title: 'Project Name7',
    discription: 'About Of Project7',
    tags: ['html', 'css'],
    view: ['repolink', 'Live Link'],
  },
  {
    id: 7,
    img: 'stimules.jpg',
    title: 'Project Name8',
    discription: 'About Of Project8',
    tags: ['html', 'css'],
    view: ['repolink', 'Live Link'],
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
      arr.push(projects[i].id);
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
        arr.push(projects[i].id);
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
        arr.push(projects[i].id);
      }
      return arr;
    });
  }

  return (
    <>
      {/* {console.log(count)} */}
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
                        src={`./assets/projects/${projects[item].img}`}
                        alt=''
                      />
                    </figure>
                    <h3 className='project-name'> {projects[item].title}</h3>
                    <p className='discription'>{projects[item].discription} </p>
                    <div className='tag-box'>
                      <p> HTML</p>
                      <p> CSS</p>
                    </div>
                    <div className='repolink-box'>
                      <abbr title='Go To Repository'>
                        {' '}
                        <a href=''>
                          <VscGithub />
                        </a>
                      </abbr>
                      <abbr title='Go To Live Demo'>
                        <a href=''>
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
        <TbChevronsLeft className='left sm-left mn-left ' onClick={handleLeft} />
        <TbChevronsRight className='right  sm-right mn-right' onClick={handleRight} />
      </section>
    </>
  );
}

export default Projects;
