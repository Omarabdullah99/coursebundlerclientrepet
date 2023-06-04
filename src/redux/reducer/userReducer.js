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

    //register reducer
    registerRequest:(state)=>{
        state.loading=true;
    },
    registerSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.user=action.payload.user;
        state.message=action.payload.message
    },
    registerFail:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error=action.payload
    },



    clearError:state=>{
        state.error=null;
    },
    clearMessage:state=>{
        state.message=null
    }
})

export const profileReducer= createReducer({},{
    updateProfileRequest:(state)=>{
        state.loading=true;
    },
    updateProfileSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    updateProfileFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload

    },

    changePasswordRequest:(state)=>{
        state.loading=true;
    },
    changePasswordSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        
    },
    changePasswordFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },

    updateProfilePictureRequest:(state)=>{
        state.loading=true;
    },
    updateProfilePictureSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        
    },
    updateProfilePictureFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },

    forgetPasswordRequest:(state)=>{
        state.loading=true;
    },
    forgetPasswordSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        
    },
    forgetPasswordFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },

    resetPasswordRequest:(state)=>{
        state.loading=true;
    },
    resetPasswordSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
        
    },
    resetPasswordFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },



    clearError:state=>{
        state.error=null;
    },
    clearMessage:state=>{
        state.message=null
    }

})