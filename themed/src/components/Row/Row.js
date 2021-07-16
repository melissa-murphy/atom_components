import styled from "styled-components";
import Container from "../Container";

const Row = styled(Container)`
  width: ${(props) => (props.width ? props.width : "100%")};
`;

export default Row;
