import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
export const Input = styled.input`
  width: 300px;
  border: none;
  border-radius: 30px;
  outline: none;
  padding-inline-start: 52px;
  height: 32px;
`;

export const InputWrapper = styled.div`
  position: relative;
  color: black;
  margin: 10px;
`;

export const Icon = styled(MdSearch)`
  position: absolute;
  font-size: 1.5rem;
  heigth: 100%;
  color: gray;
  left: 12px;
  top: 4px;
`;
