import React from 'react';
import {
  CreateBox,
  Textarea,
  Wrapper,
  Button,
  ColorPicker,
  Input,
  Color1,
  Color2,
  Color3,
  Color4,
  Color5,
} from './CreateNote.styles';

const CreateNote = () => {
  return (
    <CreateBox>
      <Textarea placeholder="Take note..." rows={5} />
      <Wrapper>
        <ColorPicker>
          <Input type="radio" name="color-pick" value="#F06292" id="color1" />
          <Color1 htmlFor="color1"></Color1>
          <Input type="radio" name="color-pick" value="#BA68C8" id="color2" />
          <Color2 htmlFor="color2"></Color2>
          <Input type="radio" name="color-pick" value="#FFD54F" id="color3" />
          <Color3 htmlFor="color3"></Color3>
          <Input type="radio" name="color-pick" value="#4FC3F7" id="color4" />
          <Color4 htmlFor="color4"></Color4>
          <Input type="radio" name="color-pick" value="#AED581" id="color5" />
          <Color5 htmlFor="color5"></Color5>
        </ColorPicker>
        <Button>Close</Button>
      </Wrapper>
    </CreateBox>
  );
};

export default CreateNote;
