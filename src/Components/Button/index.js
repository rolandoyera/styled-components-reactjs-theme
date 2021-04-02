import styled from "styled-components"


export const PrimaryButton = styled.button`
  color: #fff;
  background-color: hsl(330, 100%, 40%);
  border: 1px solid transparent;
  font-size: 1.1rem;
  padding: .8rem 1.2rem;
  margin-right: 1rem;
  transition: all .15s;
  min-width: 130px;
  &:hover {
    background-color: hsl(330, 100%, 60%);
    border: 1px solid hsl(330, 100%, 55%);
    cursor: pointer;
    letter-spacing: .5px;
  }
  &:focus {
  color: white;
  background-color: hsl(330, 100%, 60%);
  border: 1px solid hsl(330, 100%, 55%);
  box-shadow: 0 0 0 0.25rem rgba(209, 0, 105, 0.5);
  letter-spacing: .5px;
  outline: none;
  }

`;
export const SecondaryButton = styled(PrimaryButton)`
  color: hsl(330, 100%, 40%);
  background-color: white;
  border:1px solid hsl(330, 100%, 40%);
  &:hover {
    background-color: hsl(330, 100%, 95%);
    cursor: pointer;
    border: 1px solid hsl(330, 100%, 85%);
  }
  &:focus {

  background-color: rgba(209, 0, 105, 0.8);
  border: 1px solid hsl(330, 100%, 40%);
  box-shadow: 0 0 0 0.25rem rgba(209, 0, 105, 0.5);
  outline: none;
  }
`;

export const ButtonGroup = styled.div`
position: relative;
display: flex;
justify-content: center;
padding: 1rem
`;