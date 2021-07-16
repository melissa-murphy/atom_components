import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.boxShadow}
  color: ${(props) => props.theme.text};
  display: ${(props) =>
    props.block
      ? "block"
      : props.inline
      ? "inline"
      : props.inlineBlock
      ? "inline-block"
      : "flex"};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => (props.nowrap ? "nowrap" : "wrap")};
  justify-content: ${(props) =>
    props.flexStart
      ? "flex-start"
      : props.flexEnd
      ? "flex-end"
      : props.spaceBetween
      ? "space-between"
      : props.spaceEvenly
      ? "space-evenly"
      : "space-around"};
  align-items: ${(props) =>
    props.flexStart
      ? "flex-start"
      : props.flexEnd
      ? "flex-end"
      : props.baseline
      ? "baseline"
      : props.stretch
      ? "stretch"
      : "center"};
  align-content: ${(props) =>
    props.flexStart
      ? "flex-start"
      : props.flexEnd
      ? "flex-end"
      : props.spaceBetween
      ? "space-between"
      : props.spaceEvenly
      ? "space-evenly"
      : props.stretch
      ? "stretch"
      : props.center
      ? "center"
      : "space-around"};
  padding: 1rem;
  margin: 1rem;
  // Todo: width calc should call margin from theme
  width:${(props) =>
    props.two
      ? "calc(48% - 4rem)"
      : props.three
      ? "calc(33.3% - 6rem)"
      : props.four
      ? "calc(25% -8rem)"
      : props.five
      ? "calc(20% - 10rem)"
      : "calc(98% - 2rem)"};
`;

export default Container;
