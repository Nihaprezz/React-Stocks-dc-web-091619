import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" onClick={(event) => props.changeRadioBtn(event)} checked={props.alphabetStatus} />
        Alphabetically
       </label>
      <label>
        <input type="radio" value="Price" onClick={(event) => props.changeRadioBtn(event)}
        checked={props.priceStatus} onChange={(event) => props.changeRadioBtn(event)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filterBy(event)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
