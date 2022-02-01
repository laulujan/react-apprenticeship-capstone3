import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin-top: 4em;
`;
export const FormContainer = styled.div`
  margin: auto;
  margin-top: 10em;
  border-radius: 5px;
  padding: 20px;
  width: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 820px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background: #21c06e;
  font-size: 1rem;
  height: 36px;
  width: 120px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
