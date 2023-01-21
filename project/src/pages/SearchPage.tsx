import { SearchBar } from '../components/SearchBar'
import { InitialQuote } from '../components/InitialQuote'
import { PageTitle } from '../components/PageTitle'
import { SearchResult } from '../components/SearchResult'
import { ResultsContainer } from '../components/ResultsContainer'
import { ErrorMessage } from '../components/ErrorMessage'
import React, { useEffect, useState } from 'react';

interface Quote {
  author: string,
  quote: string
}

//Mimics the format of the /quotes response information for a single quote
interface QueryResult {
  _id: string,
  content: string,
  author: string,
  authorSlig: string,
  length: number,
  tags: string[]
}

const api_url: string = "https://api.quotable.io"

export function SearchPage() {
  const [position, setPosition] = useState("inner_container");
  const [results, setResults] = useState<Quote[]>([])
  const [randomQuote, setRandomQuote] = useState<Quote>();
  const [searchText, setSearchText] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  //api call for random quote at initial page load
  useEffect(() => {
    fetch(`${api_url}/random`)
      .then(res => res.json())
      .then(quote => setRandomQuote(
        {
          author: quote.author,
          quote: quote.content
        }
      ))
  }, [])

  //function to be used when a search action is to be performed
  function search(event: React.MouseEvent) {
    event.preventDefault();

    if (searchText != "") {
      //call to api for quote based on search
      fetch(`${api_url}/search/quotes?query=${searchText}&fields=author`)
        .then(res => res.json())
        .then(response => {
          let newResults: Quote[] = [];
          response.results.forEach((element: QueryResult) => {
            newResults = [...newResults, {
              author: element.author,
              quote: element.content
            }]
          })
          const constNewResults: Quote[] = newResults;
          setResults(constNewResults);
        })

      //indicate that the user has searched at least once
      setHasSearched(true)
      //set title and search bar to top of the page
      setPosition("top_container")
    }
  }

  //function to keep track of the text in the search bar
  function searchBarOnChange(event: React.FormEvent<HTMLInputElement>) {
    setSearchText(event.currentTarget.value);
  }

  return (
    <div className={position}>
      <PageTitle />
      <SearchBar searchBarOnChange={searchBarOnChange} searchButtonOnClick={search} />
      {!hasSearched && <InitialQuote author={randomQuote?.author} quote_text={randomQuote?.quote} />}
      <ResultsContainer>
        {
          // render a single SearchResult for each quote in the API reponse
          hasSearched && results.length === 0 ?
            <ErrorMessage message="Search yielded no results. Please try another query." /> :
            results.map((quote) => (
              <SearchResult author={quote.author} quote_text={quote.quote} />
            ))
        }
      </ResultsContainer>
    </div>
  )
}