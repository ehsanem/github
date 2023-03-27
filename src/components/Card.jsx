import React from 'react'
import {useContext} from 'react'
import githubUsersContext from '../context/github/GithubContext'
import { Link } from 'react-router-dom'

function Card() {
    const {users}=useContext(githubUsersContext)
    
    
    return (
    <div className='container'>
        
        <div className='row'>
        
        {users.map((user)=>(
        <div className='col-xs-12 col-sm-5 col-md-3 col-lg-3'>
            <div className='card m-1 card-custom'>
            <div className='card-body'>
            <img src={user.avatar_url} alt="Avatar" className="avatar mx-auto"></img>
            <h4>{user.login}</h4>
            <Link to={`/user/${user.login}`}>Visit Profile</Link>
            </div>
            </div>
            
        </div>
        ))}
        
        
        </div>
    </div>
    
  )
}

export default Card