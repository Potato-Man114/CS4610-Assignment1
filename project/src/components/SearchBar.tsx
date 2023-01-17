import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export function SearchBar() {
  return (
    <div>
      <form>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input className="search_input" type="text" />
      </form>
    </div>
  )
}