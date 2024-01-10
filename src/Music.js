import React from 'react'
import { Spotify } from 'react-spotify-embed';

export default function Music({item}) {
  return (
    <div>
      <Spotify wide link={item.link} />
      <span>{item.role.join(', ')}</span>
    </div>
  )
}
