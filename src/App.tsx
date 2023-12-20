// src/App.tsx
import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Viewport Height
`;

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <AppContainer>
      <Button text="Click Me" onClick={handleClick} />
    </AppContainer>
  );
};

export default App;
