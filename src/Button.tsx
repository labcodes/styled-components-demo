import React from 'react';
import StyledButton from './StyledButton';

type MyButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
