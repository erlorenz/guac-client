import React, { useCallback } from 'react';
import { http } from '../utils/http';
import Topbar from '../shared/ui/Topbar';

const LandingPage: React.FC = () => {
  return (
    <>
      <Topbar />
      <h1>This is the landing page.</h1>
    </>
  );
};

export default LandingPage;
