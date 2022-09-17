import React from 'react';

import './Profiles.css';

import Codewars from '@app/icons/codewars.svg'
// import Medium from '../icons/medium.svg';

export default () => (
  <>
    <div className="profile-links">
      <a href="https://www.linkedin.com/in/squall-leonhart/" target="_blank">
        <i className="devicon-linkedin-plain"></i>
        <p>LinkedIn</p>
      </a>
      <a href="https://github.com/tspr0tege" target="_blank">
        <i className="devicon-github-original"></i>
        <p>GitHub</p>
      </a>
      <a href="https://codepen.io/tspr0tege" target="_blank">
        <i className="devicon-codepen-plain"></i>
        <p>Codepen</p>
      </a>
      <a href="https://www.codewars.com/users/tspr0tege" target="_blank">
        <Codewars />
        <p>Code Wars</p>
      </a>
      {/* <Medium /> */}
    </div>
  </>
)
