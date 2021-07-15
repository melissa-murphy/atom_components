import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.boxShadow}
  color: ${(props) => props.theme.text};
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  padding: 1rem;
  margin: 1rem;
`;

export default Container;
