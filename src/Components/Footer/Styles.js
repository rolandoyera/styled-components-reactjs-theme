import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  position: fixed;
  bottom: 0;
  width: 100%;
  backdrop-filter: blur(18px);
  font-size: 1rem;
  padding: 1.0rem 0;
  text-align: center;
  border-top: 1px solid ${props => props.theme.borderColor};
  color: white;
  span {
      color: #D10068;
      font-weight: 500;
    }

`;