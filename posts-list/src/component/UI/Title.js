import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 16px;
`;

const SubTitle = styled.h3`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 24px;
`;

const Title = ({ variant, text }) =>
  variant === 'h1' ? (
    <MainTitle>{text}</MainTitle>
  ) : (
    <SubTitle>{text}</SubTitle>
  );

Title.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
};

Title.defaultProps = {
  variant: 'h1',
  text: '',
};

export default Title;
