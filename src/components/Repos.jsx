import React from 'react'
import { useContext, useEffect } from 'react'
import githubUsersContext from '../context/github/GithubContext'

function Repos() {
    const {userRepos,user}=useContext(githubUsersContext)
    useEffect(()=>{
        userRepos(user.login)
        console.log(userRepos(user.login))
    },[])

  return (
    <div></div>
  )
}

export default Repos