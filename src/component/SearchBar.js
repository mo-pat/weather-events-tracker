import React from 'react'

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
        button
      </button>
    </div>
  )
}
