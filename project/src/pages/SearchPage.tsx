import { SearchBar } from '../components/SearchBar'
import { InitialQuote } from '../components/InitialQuote'
import { PageTitle } from '../components/PageTitle'
import { SearchResult } from '../components/SearchResult'

export function SearchPage() {
  return (
    <div>
      <PageTitle />
      <SearchBar />
      <InitialQuote author="Paul Revere" quote_text="Run. Run mah brudda" />
      <SearchResult author="Paul Revere, probably" quote_text="Run! Run mah peoples!"></SearchResult>
    </div>
  )
}