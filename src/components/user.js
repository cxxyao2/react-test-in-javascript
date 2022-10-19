import React, { useEffect, useState } from 'react'

export default function User(props) {
  const [user, setUser] = useState(null)
  const BACKEND = 'https://bakend-jennifer.herokuapp.com/api/products'

  async function fetchUser(id) {
    console.log('id is ', id)
    const response = await fetch(BACKEND)
    setUser(await response.json())
  }
  useEffect(() => {
    fetchUser(props.id)
  }, [props.id])

  if (!user) {
    return 'Loading...'
  }

  return (
    <div id='name'>
      {JSON.stringify(Array.isArray(user) ? user[0].name : user.name)}
    </div>
  )
}
