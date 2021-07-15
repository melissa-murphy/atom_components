import styled from "styled-components";
import Container from "../Container";

const Column = styled(Container)`
  flex-direction: column;
  width: ${(props) => props.width};
`;

export default Column;
