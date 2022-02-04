import React from 'react';

function EachCard( {card} ) {
    console.log(card)
  return (
    
 <div style={{border: "solid 1px"}} className = "pigTile">

    <img src={card.image} className="ui eight wide column"  />
    <h2  className="ui eight wide column" >Name: {card.name}  </h2>
  
    <ul  className="ui eight wide column">
      <li>specialty: {card.specialty}</li>
       <li>greased: {card.greased}</li>
       <li>weight: {card.weight}</li>
  {/* //     medal: {hogs['highest medal achieved']} */}
      
  </ul>
    
  </div>

  
  )}

export default EachCard;
