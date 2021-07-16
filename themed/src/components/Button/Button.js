import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.secondary
      ? props.theme.secondary
      : props.info
      ? props.theme.info
      : props.success
      ? props.theme.success
      : props.warning
      ? props.theme.warning
      : props.error
      ? props.theme.error
      : props.theme.primary};
`;

export default Button;
