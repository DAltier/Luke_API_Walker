import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { SearchForm, SearchHeader, SearchLabel, SearchSelect, SearchInput, SearchBox, SearchButton } from './styles/SearchBarStyle';

const SearchBar = props => {
  const [fState, setFState] = useState ({
    category: "people",
    id: ""
  });

  const onChange = e => {
    setFState({
      ...fState,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    navigate('/' + fState.category + '/' + fState.id);
  }

  return (
    <div>
      <SearchHeader>Luke APIwalker</SearchHeader>
      <SearchForm onSubmit = { onSubmit }>
        <div>
          <SearchLabel>Search for:</SearchLabel>
          <SearchSelect name = "category" onChange = { onChange }>
            <option value = "people">People</option>
            <option value = "planets">Planets</option>
            <option value = "starships">Starships</option>
            <option value = "films">Films</option>
          </SearchSelect>
        </div>
        <SearchBox>
          <SearchLabel>ID:</SearchLabel>
          <SearchInput type = "number" name = "id" onChange = { onChange } />
        </SearchBox>
        <div>
          <SearchButton type = "submit">Search</SearchButton>
        </div>
      </SearchForm>
    </div>
  )
}

export default SearchBar;