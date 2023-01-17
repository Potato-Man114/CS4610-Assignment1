interface SearchResultProp {
  quote_text: string,
  author: string
}

export function SearchResult({ quote_text, author }: SearchResultProp) {
  return (
    <div className="search_result">
      <p className="quote quote_body">{quote_text}</p>
      <p className="quote quote_author">-- {author}</p>
    </div>
  )
}