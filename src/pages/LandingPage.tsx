import React, { useCallback } from 'react';
import { http, HttpMethod } from '../utils/http';

const LandingPage: React.FC = () => {
  const testStuff = async () => {
    const response = await http('get', 'https://swapi.dev/api/people/3426435');

    console.log(response);
  };

  return (
    <>
      <button onClick={testStuff}>click</button>
      <h1>This is the landing page.</h1>
    </>
  );
};

export default LandingPage;
