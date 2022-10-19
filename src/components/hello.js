import React from 'react'

export default function hello(props) {
  if (props.name) {
    return <h1>hello, {props.name}</h1>
  }
  return <div>hello, stranger</div>
}
