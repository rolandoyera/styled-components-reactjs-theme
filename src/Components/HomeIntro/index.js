import React from 'react';
import { IntroWrapper, IntroImage, IntroTitle, Desciption, Name } from './Styles';
import { PrimaryButton, SecondaryButton, ButtonGroup } from '../Button'
import Image from '../../assets/author.jpeg'

const HomeIntro = () => {
  return (
    <IntroWrapper>
      <Name>Monica</Name>
      <IntroImage>
        <img src={Image} alt="author" />
      </IntroImage>
      <IntroTitle>
        Hey! I’m <strong>Monica</strong>
      </IntroTitle>
      <Desciption>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nam rem pariatur quas, id consectetur, error accusamus, omnis odit hic numquam. Perferendis est, velit aperiam laboriosam voluptates delectus quidem iste!</Desciption>
      <ButtonGroup>
        <PrimaryButton>Read</PrimaryButton>
        <SecondaryButton>Read More</SecondaryButton>
      </ButtonGroup>
    </IntroWrapper>

  );
}

export default HomeIntro;


