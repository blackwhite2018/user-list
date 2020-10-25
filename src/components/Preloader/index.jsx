import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Preloader = () => (
  <Dimmer active inverted page>
    <Loader size="huge" inverted>
      Loading...
    </Loader>
  </Dimmer>
);

export { Preloader };
