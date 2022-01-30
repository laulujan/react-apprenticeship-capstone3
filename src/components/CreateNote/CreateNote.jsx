import React, { useState, useEffect } from 'react';
import { createNote, updateNote } from '../../services/notes';
import { useAuth } from '../../Provider/Auth/Provider';
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
import { useNotes } from '../../Provider/Notes/Provider';

const CreateNote = ({ note, id, close }) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const { user } = useAuth();
  const { reloadNotes } = useNotes();

  useEffect(() => {
    if (note) {
      setText(note.text);
      setColor(note.color);
    }
  }, [note]);

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const onClick = () => {
    let isArchived = false;

    if (!id) {
      createNote(text, color, user.uid);
      setText('');
      setColor('');
    } else {
      updateNote(id, text, color, user.uid, note.isArchived);
      isArchived = note.isArchived;
      close();
    }

    reloadNotes(user.uid, isArchived, false);
  };

  return (
    <CreateBox>
      <Textarea
        placeholder="Take note..."
        rows={5}
        onChange={onChangeText}
        value={text}
      />
      <Wrapper>
        <ColorPicker onChange={onChangeColor} value={color}>
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
        <Button onClick={onClick}>Save</Button>
      </Wrapper>
    </CreateBox>
  );
};

export default CreateNote;
