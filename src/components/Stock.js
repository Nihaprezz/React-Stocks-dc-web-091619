import React from 'react'

const Stock = (props) => (
  
  <div>
    
    <div className="card" onClick={() => props.addOrDelete(props.stockObject)}>
      <div className="card-body">
        <h5 className="card-title">
            {props.stockObject.name}
        </h5>
        <p className="card-text">
          {props.stockObject.ticker} : {props.stockObject.price}
          </p>
      </div>
    </div>


  </div>
);

export default Stock
