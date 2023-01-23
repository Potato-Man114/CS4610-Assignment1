import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

interface SearchBarProps {
  //https://www.typescriptlang.org/docs/handbook/2/functions.html#:~:text=If%20you%20need%20to%20accept%20an%20arbitrary%20function
  search: (event: React.FormEvent) => void;
  searchBarOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export function SearchBar({ searchBarOnChange, search }: SearchBarProps) {
  return (
    <div className="search_bar">
      <form onSubmit={search} id="search_form" className="search_form">
        <input onChange={searchBarOnChange} id="search_input" className="search_input search" type="text" />
        <button type="submit" id="search_button" className="search_button search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  )
}