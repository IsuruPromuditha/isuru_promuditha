import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from '../../commom/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} link='https://github.com/IsuruPromuditha?tab=repositories' h3='Viber' p='Streeming App'/>
            <ProjectCard src={freshBurger} link='https://github.com/IsuruPromuditha?tab=repositories' h3='Fresh Burger' p='Food App'/>
        </div>
    </section>
  )
}

export default Projects