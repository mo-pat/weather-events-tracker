import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <select name="events" id="event">
        <option value="wildffire">Wildfire</option>
        <option value="tornado">Tornado</option>
        <option value="Storm">Storm</option>
      </select>
      <input type="text" className="input" placeholder="Search..."/>

      {/* add magnifying glass icon from font awesome*/}
      <button className="btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  )
}
