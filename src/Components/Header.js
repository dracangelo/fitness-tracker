// Header.js
import React from 'react';
import styled from 'styled-components';

// Define a styled component for the header
const HeaderWrapper = styled.header`
  background-color: #3498db;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

// Define a styled component for the h1 element
const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Fitness Tracker</HeaderTitle>
    </HeaderWrapper>
  );
};

export default Header;
