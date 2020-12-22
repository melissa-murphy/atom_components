// import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 1rem;
  color: ${({ theme }) => (theme === 'light' ? theme.dark : theme.light)};
  background-color: ${({ theme }) => (theme === 'light' ? theme.light : theme.dark)};
`;

export default Button;
