import {createReducer} from "@reduxjs/toolkit"

export const adminReducer=createReducer({},{
    //creteCourse
    createCourseRequest: state => {
        state.loading = true;
      },
      createCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      createCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      //deleteCourse
      deleteCourseRequest: state => {
        state.loading = true;
      },
      deleteCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },


      clearError: state => {
        state.error = null;
      },
      clearMessage: state => {
        state.message = null;
      },


})