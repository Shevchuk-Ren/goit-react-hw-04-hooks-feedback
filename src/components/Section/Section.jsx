import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, Name } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionWrapper>
    {title && <Name>{title}</Name>}
    {children}
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
