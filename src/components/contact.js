import React from 'react'
import MyMapWrapper from './my-map-wrapper'

export default function contact(props) {
  return (
    <div>
      <h2>contact</h2>
      <div id='address'>{props.address}</div>
      <MyMapWrapper center={props.center} />
    </div>
  )
}
