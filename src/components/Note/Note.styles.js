import styled from 'styled-components';

export const NoteBox = styled.div`
  max-width: 300px;
  width: 90%;
  height: auto;
  float: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
  -webkit-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Content = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  background: none;
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const Wrapper = styled.div`
  text-align: end;
`;
