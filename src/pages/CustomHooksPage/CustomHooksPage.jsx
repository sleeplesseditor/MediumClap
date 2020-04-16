import React from 'react';
import '../MediumClapPage.scss';
import DefaultClap from '../../components/MediumClap/DefaultClap';
import CustomHooksClap from '../../components/MediumClap/CustomHooksClap';

const CustomHooksPage = () => {
  return (
    <React.Fragment>
      <h1 className="clap-heading">Custom Hooks Page</h1>
      <div className="clap-container">
        <div className="clap-container-columns">
          <div className="clap-container-card">
            <h1 className="clap-container-card-heading-before">Before</h1>
            <DefaultClap />
          </div>
          <div className="clap-container-card">
            <h1 className="clap-container-card-heading-after">After</h1>
            <CustomHooksClap />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CustomHooksPage;