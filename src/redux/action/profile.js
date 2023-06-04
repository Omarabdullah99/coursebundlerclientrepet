import axios from "axios";
import { server } from "../store";

//update profile means name and email change
export const updateProfile=(name,email)=>async dispatch=>{
    try {
        dispatch({type:"updateProfileRequest"})
        const {data}=await axios.put(`${server}/updateprofile`,{
            name,email
        },{
            headers:{
                'Content-type':"application/json"
            },
            withCredentials:true
        })
        dispatch({type:"updateProfileSuccess",payload:data.message})
    } catch (error) {
        dispatch({
            type:"updateProfileFail",
            payload:error.response.data.message
        })
        
    }
}

//change password 

export const changePassword=(oldPassword,newPassword)=>async dispatch=>{
    try {
        dispatch({type:"changePasswordRequest"})
        const {data}=await axios.put(`${server}/changepassword`,{
            oldPassword,newPassword
        },{
            headers:{
                'Content-type':"application/json"
            },
            withCredentials:true
        })
        dispatch({type:"changePasswordSuccess",payload:data.message})
    } catch (error) {
        dispatch({
            type:"changePasswordFail",
            payload:error.response.data.message
        })
        
    }
}

//update Profile Picture
export const updateProfilePicture= formdata =>async dispatch=>{
    try {
        dispatch({type:"updateProfilePictureRequest"})
        const {data}=await axios.put(`${server}/updateprofilepicture`,formdata,{
            headers:{
                "Content-Type":'multipart/form-data' //update profile e eita dite hobe
            },
            withCredentials:true
        })
        dispatch({type:"updateProfilePictureSuccess",payload:data.message})
    } catch (error) {
        dispatch({
            type:"updateProfilePictureFail",
            payload:error.response.data.message
        })
        
    }
}
