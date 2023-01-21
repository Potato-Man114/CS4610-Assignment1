interface InitialQuoteProp {
  quote_text?: string,
  author?: string
}

export function InitialQuote({ quote_text = "loading...", author = "loading..." }: InitialQuoteProp) {
  return (
    <div className="search_result">
      <p className="quote quote_body">{quote_text}</p>
      <p className="quote quote_author">-- {author}</p>
    </div>
  )
}