import React from 'react'
import UsersResults from '../components/users/UsersResults'
import UserSeach from '../components/users/UserSearch'


function Home() {
  return (
    <>
    <UserSeach /> 
    <UsersResults />
    </>
  )
}

export default Home