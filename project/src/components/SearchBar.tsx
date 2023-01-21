import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

interface SearchBarProps {
  //https://www.typescriptlang.org/docs/handbook/2/functions.html#:~:text=If%20you%20need%20to%20accept%20an%20arbitrary%20function
  searchButtonOnClick: (event: React.MouseEvent) => void;
  searchBarOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export function SearchBar({ searchBarOnChange, searchButtonOnClick }: SearchBarProps) {
  return (
    <div className="search_bar">
      <form id="search_form" className="search_form">
        <input onChange={searchBarOnChange} id="search_input" className="search_input search" type="text" />
        <button type="button" id="search_button" className="search_button search" onClick={searchButtonOnClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  )
}