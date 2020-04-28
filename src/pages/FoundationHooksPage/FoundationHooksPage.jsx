import React from 'react';
import '../MediumClapPage.scss';
import DefaultClap from '../../components/MediumClap/DefaultClap';
import FoundationHooksClap from '../../components/MediumClap/FoundationHooksClap';

const FoundationHooksPage = () => {
  return (
    <React.Fragment>
      <h1 className="clap-heading">Compound Component Page</h1>
      <div className="clap-container">
        <div className="clap-container-columns">
          <div className="clap-container-card">
            <h1 className="clap-container-card-heading-before">Before</h1>
            <DefaultClap />
          </div>
          <div className="clap-container-card">
            <h1 className="clap-container-card-heading-after">After</h1>
            <FoundationHooksClap />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FoundationHooksPage;