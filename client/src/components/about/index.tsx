import * as React from 'react';
import * as alias from '../../types/alias';
import * as actions from '../../actions/index';

interface AboutProps {
  testValue: alias.Value;
  onTest: (item: alias.Value) => actions.TestAction;
}

class About extends React.Component<AboutProps, {}> {
  render() {
    return (
      <div>What up</div>
    );
  }
}

export default About;
