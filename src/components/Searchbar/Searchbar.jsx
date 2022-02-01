import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Input, InputWrapper, Icon } from './Searchbar.styles';
import { useNotes } from '../../Provider/Notes/Provider';
import { useAuth } from '../../Provider/Auth/Provider';
const Searchbar = () => {
  const [query, setQuery] = useState('');
  const { reloadNotes } = useNotes();
  const { user } = useAuth();
  const location = useLocation();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const isArchived = location.pathname === '/notes' ? false : true;
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      reloadNotes(user.uid, isArchived, query);
      setQuery('');
    }
  };

  return (
    <InputWrapper>
      <label htmlFor="search-input">
        <Icon />
        <Input
          type="text"
          placeholder="Search"
          onChange={onChange}
          value={query}
          onKeyDown={onKeyDown}
        />
      </label>
    </InputWrapper>
  );
};

export default Searchbar;
