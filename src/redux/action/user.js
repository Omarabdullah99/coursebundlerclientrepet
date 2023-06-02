import { server } from "../store";
import axios from 'axios'

//login function
export const login=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:"loginRequest"})

        const {data}= await axios.post(`${server}/login`, {email,password},{
            headers:{
                "Content-Type":'application/json'
            },
            withCredentials:true //cookies jonno eita true dewa lagbe
        })

        console.log("logindata",data)

        dispatch({type:"loginSuccess",  payload:data})
        
    } catch (error) {
        dispatch({type:'loginFail',payload:error.response.data.message})
        
    }
}

//getMyprofile and reload dewar por jate login chole na jay tar jonno

export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({type:"loadUserRequest"})

        const {data}= await axios.get(`${server}/getmyprofile`, {
            
            withCredentials:true //cookies jonno eita true dewa lagbe
        })

        console.log("loaduser/getmyprofile",data)

        dispatch({type:"loadUserSuccess",  payload:data.user})
        
    } catch (error) {
        dispatch({type:'loadUserFail',payload:error.response.data.message})
        
    }
}

//logout function

export const logout=()=>async(dispatch)=>{
    try {
        dispatch({type:"logOutRequest"})

        const {data}= await axios.get(`${server}/logout`, {
            
            withCredentials:true //cookies jonno eita true dewa lagbe
        })

        console.log("logout",data)

        dispatch({type:"logOutSuccess",  payload:data.message})
        
    } catch (error) {
        dispatch({type:'logOutFail',payload:error.response.data.message})
        
    }
}