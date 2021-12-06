import React from 'react'

function DestinationForm(props) {
  const { setSearch, searchDestination } = props;

  return (
    <div className="destination-form">
      <div>
        <input className="form-input" type="text" onChange={(e) => setSearch(e.target.value)}></input>
        <button className="form-btn" onClick={searchDestination}>Buscar clima</button>
      </div>
    </div>
  )
}

export default DestinationForm;
