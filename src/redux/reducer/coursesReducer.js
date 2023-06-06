import {createReducer} from '@reduxjs/toolkit'

export const coursesReducer=createReducer({courses:[]},{
    //get all courses
    allCoursesRequest: state => {
        state.loading = true;
      },
      allCoursesSuccess: (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      },
      allCoursesFail: (state, action) => {
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