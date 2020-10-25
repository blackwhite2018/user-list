import React from 'react';

import { Layout } from '../../components/Layout';
import { ErrorMessage } from '../../components/ErrorMessage';

const NotFoundPage = () => (
  <Layout>
    <ErrorMessage
      header="Page not found"
      text="You may have made a mistake when going to the page."
    />
  </Layout>
);

export { NotFoundPage };
