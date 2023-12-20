import React, { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';
import Confetti from 'react-confetti';

const AppContainer = styled.div<{bgColor: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
`;

const App: React.FC = () => {
  const [confetti, setConfetti] = useState(false);
  const [bgColor, setBgColor] = useState('white');

  const handleClick = () => {
    setConfetti(true);
    setBgColor('#e3d1fa')
    setTimeout(() =>{
      setConfetti(false)
      setBgColor('white');
      }, 5000);

    console.log('Button clicked!');
  };

  return (
    <AppContainer bgColor={bgColor}>
      {confetti && <Confetti />}
      <Button text="Click Me" onClick={handleClick} />
    </AppContainer>
  );
};

export default App;
