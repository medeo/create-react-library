import React from 'react';
import styled from 'styled-components';

const Example = ({className}) => (
  <div className={className}>
    hello world
  </div>
);

export default styled(Example)`
  color: blue;
`;
