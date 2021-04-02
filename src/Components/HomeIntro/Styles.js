import styled from 'styled-components';


export const IntroWrapper = styled.header`
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
  padding: 9vw 10px 0 10px;
  text-align: center;
`;


export const IntroImage = styled.div`
  position: relative;
  width: 270px;
  height: 270px;
  padding: 30px;
  border-radius: 50%;
  background-color: ${props => props.theme.bodyBg};;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 60px;
  transition: all ${props => props.theme.transitionTime};
  @media (max-width: 990px) {
    width: 220px;
    height: 220px;
    padding: 25px;
    margin-bottom: 25px;
  }
  @media (max-width: 990px) {
    width: 180px;
    height: 180px;
    padding: 20px;
    margin-bottom: 20px;
  }
  img {
    position: relative;
    width: 100%;
    height: auto;
    display: block;
    border-radius: 50%;
  }
`;

export const IntroTitle = styled.h1`
position: relative;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 990px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
  }
`;

export const Desciption = styled.p`
position: relative;
  text-align: center;
`;

export const Name = styled.h2`
  position: absolute;
  left: 50%;
  top: 15%;
  text-align: center;
  font-size: 20vw;
  transform: translate(-50%, 0%);
  z-index: 0;
  color: ${props => props.theme.lightAccent};
`;
