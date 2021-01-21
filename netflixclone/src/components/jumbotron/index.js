import React from 'react';
import { Container, Inner } from './styles/jumbotron';

export default function Jumbotron({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  direction = 'row',
  // eslint-disable-next-line no-unused-vars
  ...restProps
}) {
  return (
    <Inner direction={direction}>
      <p>Hello</p>
    </Inner>
  );
}

// eslint-disable-next-line react/prop-types
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Container {...restProps}>{children}</Container>;
};
