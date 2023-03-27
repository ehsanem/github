import React from 'react'
import githubUsersContext from '../context/github/GithubContext'
import { useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const params= useParams()
    const {userFetch,userRepos, user,repos} = useContext(githubUsersContext)
    useEffect(()=>{
        userFetch(params.login)
        userRepos(params.login)
        console.log(repos)
    }, [])
  return (
    <div className='container'>
    <div className='row my-5'>
        <img src={user.avatar_url} alt="Avatar" className="profile-avatar mx-auto"></img>
    </div>
    <div className='row my-5'>
        <div className='col h-line'>
            <h4>Public Repositories</h4>
            <h3>{user.public_repos}</h3>

        </div>
        <div className='col h-line'>
            <h4>Followers</h4>
            <h3>{user.followers}</h3>
        </div>
        <div className='col'>
            <h4>Location</h4>
            <h3>{user.location}</h3>
        </div>
    </div>
    <div className='row my-5'>
        
        <h3>Repositories</h3>
        {repos.map((repo)=>(
            <div className='col-xs-12 col-sm-5 col-md-3 col-lg-3 my-1'>
            <div className='card m-1 card-custom h-100 '>
            <div className='card-header'>
                <h5>{repo.name}</h5>
            </div>
            <div className='card-body'>
            <p>{repo.description}</p>
            </div>
            </div>
            
            </div>
            


            
        ))}
    </div>
    </div>
    
  )
}

export default Profile