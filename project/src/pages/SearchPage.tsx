import { SearchBar } from '../components/SearchBar'
import { InitialQuote } from '../components/InitialQuote'
import { PageTitle } from '../components/PageTitle'
import { SearchResult } from '../components/SearchResult'
import { useState } from 'react';



export function SearchPage() {
  const [position, setPosition] = useState("inner_container");


  function searchButtonOnClick(event: React.MouseEvent) {
    event.preventDefault();
    //fetch code will go here

    //set title and search bar to top of the page
    setPosition("top_inner_container")
  }

  return (
    <div className={position}>
      <PageTitle />
      <SearchBar searchButtonOnClick={searchButtonOnClick} />
      <InitialQuote author="Paul Revere" quote_text="Run. Run mah brudda" />
      <SearchResult author="Paul Revere, probably" quote_text="Run! Run mah peoples!"></SearchResult>
    </div>
  )
}