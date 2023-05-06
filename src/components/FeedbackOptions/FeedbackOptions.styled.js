import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border-color: grey;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  :first-letter {
    text-transform: uppercase;
  }

  :active {
    background-color: lightblue;
  }
`;
