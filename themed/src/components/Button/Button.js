import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.primary
      ? props.theme.primary
      : props.secondary
      ? props.theme.secondary
      : props.info
      ? props.theme.info
      : props.success
      ? props.theme.success
      : props.theme.error};
`;

export default Button;
