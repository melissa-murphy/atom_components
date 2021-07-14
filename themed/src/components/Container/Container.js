import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export default Container;
