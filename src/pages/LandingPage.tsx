import React, { useCallback } from 'react';
import { http } from '../utils/http';
import Topbar from '../shared/ui/Topbar';
import styled from 'styled-components';

const LandingPage: React.FC = () => {
  return (
    <>
      <Topbar />
      <Hero>This is the hero</Hero>
    </>
  );
};

export default LandingPage;

const Hero = styled.div`
  min-height: 520px;
  background-color: lightgray;
`;
