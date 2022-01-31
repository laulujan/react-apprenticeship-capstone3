import styled from 'styled-components';

export const CreateBox = styled.div`
  width: 90%;
  max-width: 500px;
  padding: 16px;
  margin: 16px auto;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  margin: 5px;
  font-size: 14px;
  border: none;
  font-weight: 300;
  &:focus {
    outline: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: none;
  height: 36px;
  width: 120px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ColorPicker = styled.div`
  width: 50%;
  margin-bottom: -35px;
`;
export const Input = styled.input`
  visibility: hidden;
  width: 0;
  margin: 0;
  &:checked + label:after {
    content: '';
    position: absolute;
    transform: rotate(45deg);
    left: 10px;
    top: 6px;
    opacity: 0.5;
    width: 5px;
    height: 10px;
    border-right: 1px solid;
    border-bottom: 1px solid;
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
`;

export const Color1 = styled(Label)`
  background-color: #f06292;
`;

export const Color2 = styled(Label)`
  background-color: #ba68c8;
`;
export const Color3 = styled(Label)`
  background-color: #ffd54f;
`;

export const Color4 = styled(Label)`
  background-color: #4fc3f7;
`;

export const Color5 = styled(Label)`
  background-color: #aed581;
`;
