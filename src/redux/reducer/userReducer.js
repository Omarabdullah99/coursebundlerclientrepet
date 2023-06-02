import {createReducer} from '@reduxjs/toolkit'

export const userReducer=createReducer({},{

    //login reducer work
    loginRequest:(state)=>{
        state.loading=true;
    },
    loginSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload.user;
        state.message=action.payload.message
    },
    loginFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload
    },

    //getMyprofile and reload dewar por jate login chole na jay tar jonno
    loadUserRequest:(state)=>{
        state.loading=true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload;
        state.message=action.payload.message
    },
    loadUserFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload
    },


    //logout
    logOutRequest:(state)=>{
        state.loading=true;
    },
    logOutSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.user=null;
        state.message=action.payload
    },
    logOutFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.error=action.payload
    },



    clearError:state=>{
        state.error=null;
    },
    clearMessage:state=>{
        state.message=null
    }
})