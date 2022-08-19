import styled from "styled-components";

function Layout(props) {
  return <StLayout>{props.children}</StLayout>;
}

const StLayout = styled.div`
  background-color: aliceblue;
  max-width: 390px;
  height: 100vh;
  margin: 0 auto;
  /* max-width: 1000px;
  padding: 0 20px; */
`;

export default Layout;
