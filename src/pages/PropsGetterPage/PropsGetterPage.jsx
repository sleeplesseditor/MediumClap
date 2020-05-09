import React from 'react';
import '../MediumClapPage.scss';
import DefaultClap from '../../components/MediumClap/DefaultClap';
import PropsGetterClap from '../../components/MediumClap/PropsGetterClap';

const PropsGetterPage = () => {
  return (
    <React.Fragment>
      <h1 className="clap-heading">Props Getter Page</h1>
      <div className="clap-container">
        <div className="clap-container-columns">
          <div className="clap-container-card">
            <h1 className="clap-container-card-heading-before">Before</h1>
            <DefaultClap />
          </div>
          <div className="clap-container-card">
            <h1 className="clap-container-card-heading-after">After</h1>
            <PropsGetterClap />
          </div>
        </div>
      </div>
      <div className="clap-message">
        <p>
          Inspect the <a className="clap-message-link" href="https://github.com/sleeplesseditor/MediumClap/blob/master/src/components/MediumClap/PropsGetterClap.jsx">code</a> to see how each version of the component works!
        </p>
      </div>
    </React.Fragment>
  )
}

export default PropsGetterPage;