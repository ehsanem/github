import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const githubUsersContext=createContext()

export const DataProvider=({children})=>{
    const initialState ={
        users:[],
        user:{},
        repos:[]
    }
    const [state,dispatch]=useReducer(githubReducer, initialState)

    const usersFetch=async (text)=>{
        const query = new URLSearchParams({
            q:text
        })
        const response= await fetch(`${process.env.REACT_APP_URL}/search/users?${query}`, {
            
        })
        const {items} = await response.json()
        
        dispatch({
            type:"GET_USERS",
            payload:items
        })
    }
    const userFetch=async (login)=>{
        
        const response= await fetch(`${process.env.REACT_APP_URL}/users/${login}`, {
            
        })
        const data = await response.json()
        
        dispatch({
            type:"GET_USER",
            payload:data
        })
    }
    const userRepos=async (login)=>{
        const response = await fetch(`${process.env.REACT_APP_URL}/users/${login}/repos`, {
            
        })
        const data = await response.json()
        dispatch({
            type:"GET_REPOS",
            payload:data
        })
    }
    return(
        <githubUsersContext.Provider 
        value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            usersFetch,
            userFetch,
            userRepos
            }}
        >
            {children}
        </githubUsersContext.Provider>
    )
}

export default githubUsersContext