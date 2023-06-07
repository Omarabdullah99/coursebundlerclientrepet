import {createReducer} from '@reduxjs/toolkit'

export const coursesReducer=createReducer({courses:[], lectures:[]},{
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
      //get all courses end

      //add to playlist
      addToPlaylistRequest: state => {
        state.loading = true;
      },
      addToPlaylistSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      addToPlaylistFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      //remove from playlist-> profile reducer e ache

      //getCourseLectures
      getCourseLectureRequest: state => {
        state.loading = true;
      },
      getCourseLectureSuccess: (state, action) => {
        state.loading = false;
        state.lectures = action.payload;
      },
      getCourseLectureFail: (state, action) => {
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