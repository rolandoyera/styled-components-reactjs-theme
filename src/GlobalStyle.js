import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  background-color: #141a2c;
  line-height: 1.5;
  font-size: 1.1rem;
  font-family: sans-serif;
  font-weight: 300;
  color: black;
}
`;
export const H1 = styled.h1`
  font-size: 2.5rem;
  font-family: sans-serif;
  text-align: center;
  color: #ffffff;
  margin: 2rem 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;