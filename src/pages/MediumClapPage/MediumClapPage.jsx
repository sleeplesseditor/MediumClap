import React from 'react';
import './MediumClapPage.scss';

import DefaultClap from '../../components/MediumClap/DefaultClap';

const MediumClapPage = () => {
  return (
    <div className="clap-container">
      <div className="clap-container-columns">
        <div className="clap-container-card">
          <h1 className="clap-container-card-heading-before">Before</h1>
          <DefaultClap />
        </div>
        <div className="clap-container-card">
          <h1 className="clap-container-card-heading-after">After</h1>
          <DefaultClap />
        </div>
      </div>
    </div>
  )
}

export default MediumClapPage;