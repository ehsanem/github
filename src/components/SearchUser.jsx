import React, { useState,useContext,useEffect } from 'react'
import {BsGithub} from 'react-icons/bs'
import githubUsersContext from '../context/github/GithubContext'


function SearchUser() {
  const {usersFetch,users} = useContext(githubUsersContext)
  const [textInput,setTextInput]=useState('')
  const [usersDataStatus,SetUsersDataStatus]=useState(true)
  const handleChange= (e)=>setTextInput(e.target.value)
  const handleSubmit= (e)=>{
    e.preventDefault()
    usersFetch(textInput)
  }
  
    useEffect(()=>{
        if (Object.keys(users).length>0){
            SetUsersDataStatus(false)
        }
    },[users])
  return (
    <div className='container'>
       <div className={usersDataStatus ? "row vh-100 align-items-center" : "row my-3 align-items-center" }>
        <div className='row'>
          <h1 className='text-center'><BsGithub/></h1>
          <h1 className='text-center '>Github Finder</h1>
         <form onSubmit={handleSubmit}>
         <div className='row  justify-content-center'>
            <div className='col-6 pe-0'>
                <input type="text" className='form-control search-form' placeholder='Search username' value={textInput} onChange={handleChange}></input>
            </div>
            <div className='col-auto ps-0'>
                      <button className='btn btn-primary btn-custom px-4'>Go</button>
                    </div>
          </div>
          </form>  

        </div>
        </div>
    </div>
    
  )
}

export default SearchUser