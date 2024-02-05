import React from 'react'
import { useParams } from 'react-router-dom';

export default function Buy({beats}) {
    const {beatID} = useParams()
    console.log(beats.find(b=>b.id===beatID))
  return (
    <div>
        <span style={{color: 'black'}}>{beats.filter(b=>b.id===beatID).title}</span>
    </div>
  )
}
