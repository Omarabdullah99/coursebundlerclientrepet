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

      //addLecture

      addLectureRequest: state => {
        state.loading = true;
      },
      addLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      addLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      //deleteLecture
      deleteLectureRequest: state => {
        state.loading = true;
      },
      deleteLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteLectureFail: (state, action) => {
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