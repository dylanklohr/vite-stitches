import * as React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '../src/index';
const printReady = (obj: object) => JSON.stringify(obj, null, 2);

const Example = () => {
  return (
    <Box as="h1" css={{ padding: '$4' }}>
      Hello, world
    </Box>
  );
};

ReactDOM.render(<Example />, document.getElementById('root'));
