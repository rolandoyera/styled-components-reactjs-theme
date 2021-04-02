import React from 'react';
import { FooterWrapper } from './Styles'

const Footer = () => {
  return (
    <FooterWrapper>
      Copyright &copy; {new Date().getFullYear()} • Develop<span>Her</span>
    </FooterWrapper>
  );
}

export default Footer;

