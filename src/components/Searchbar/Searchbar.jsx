import React from 'react';
import { Input, InputWrapper, Icon } from './Searchbar.styles';

const Searchbar = () => {
  return (
    <InputWrapper>
      <label htmlFor="search-input">
        <Icon />
        <Input type="text" placeholder="Search" />
      </label>
    </InputWrapper>
  );
};

export default Searchbar;
