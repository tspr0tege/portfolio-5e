import React, { useEffect } from 'react';

import SectionCard from '../components/SectionCard';
import './Home.css';

// Column 1
import CoreSkills from './sections/home/CoreSkills';
import AdditionalSkills from './sections/home/AdditionalSkills';
import SkillsSummary from './sections/home/SkillsSummary';
// Column 2
import Projects from './sections/home/Projects';
import TechnicalExperience from './sections/home/TechnicalExperience';
import Education from './sections/home/Education';
// Column 3
import Profiles from './sections/home/Profiles';
import About from './sections/home/About';
import HobbiesAndInterests from './sections/home/HobbiesAndInterests';

export default ({ sendNames }) => {

  const collection = {
    names: [],
    functions: []
  };

  function addToCollection(name, func) {
    collection.names.push(name);
    collection.functions.push(func);
  }

  /* populateSections expects an array of objects
    properties are:
    component - React component to render
    props - all properties to pass into SectionCard
      Can include: title, cardClass, bodyClass
      Requires addToCollection function for subNav
   */
  function populateSections(elements) {
    return (
      elements.map(({ props, component }, index) => {
        props.addToCollection = addToCollection;
        return (
          <SectionCard {...props} key={index} >
            {component}
          </SectionCard>
        )
      })
    )
  }
  
  useEffect(() => {
    const titles = document.querySelectorAll('.card-title');
    const namesArray = [];
    titles.forEach((element) => {
      namesArray.push(element.innerText);
    })
    sendNames(collection);
  })

  return (
    <div className="content-grid">

      {/* Column 1 */}
      <div className="skill-grid">
        {populateSections([
          {
            component: <CoreSkills />,
            props: {
              title: 'Core Skills',
              bodyClass: 'core-skills-list'
            }
          }, 
          {
            component: <AdditionalSkills />,
            props: {
              title: 'Additional Skills',
              bodyClass: 'vertical-flex',
              cardClass: 'other-skills-container'
            }
          },
          {
            component: <SkillsSummary />,
            props: {
              title: 'Skills Summary'
            }
          }
        ])}
      </div>

      {/* Column 2 */}
      <div className="vertical-flex">
        {populateSections([
          {
            component: <Projects />,
            props: {
              title: 'Projects'
            }
          }, 
          {
            component: <TechnicalExperience />,
            props: {
              title: 'Technical Experience'
            }
          },
          {
            component: <Education />,
            props: {
              title: 'Education'
            }
          }
        ])}
      </div>

      {/* Column 3 */}
      <div className="vertical-flex">
        {populateSections([
          {
            component: <Profiles />,
            props: {
              title: 'Profiles'
            }
          }, 
          {
            component: <About />,
            props: {
              title: 'About Me'
            }
          },
          {
            component: <HobbiesAndInterests />,
            props: {
              title: 'Hobbies and Interests'
            }
          }
        ])}
      </div>
    </div>
  )
}