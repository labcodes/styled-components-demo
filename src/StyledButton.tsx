import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #935fd3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5a3489;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #c7a3f5;
  }
`;

export default StyledButton;
