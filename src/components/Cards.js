import React from 'react';
import EachCard from './EachCard';
import hogs from '../porkers_data';

function Cards({hogs}) {

  const hogCard = hogs.map((pig) => {
    return <EachCard card={pig}/>
      // name = {hogs.name}
      // specialty = {hogs.specialty}
      // greased = {hogs.greased}
      // weight = {hogs.weight}
      // medal= {hogs['highest medal achieved']}
      // image = {hogs.image}
    // />

  })

  return ( <div>{hogCard}</div> )

}

export default Cards;

