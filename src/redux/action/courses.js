import { server } from "../store";
import axios from "axios";

//get all courses
export const getAllCourses =
  (category = '', keyword = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'allCoursesRequest' });

      const { data } = await axios.get(
        `${server}/courses?keyword=${keyword}&category=${category}`
      );

      console.log("action",data)

      dispatch({ type: 'allCoursesSuccess', payload: data.getAllCourses });
    } catch (error) {
      dispatch({
        type: 'allCoursesFail',
        payload: error.response.data.message,
      });
    }
  };

  //getCourseLecture by id
  export const getCourseLectures = id => async dispatch => {
    try {
      dispatch({ type: 'getCourseLectureRequest' });
  
      const { data } = await axios.get(`${server}/course/${id}`, {
        withCredentials: true,
      });
  
      dispatch({ type: 'getCourseLectureSuccess', payload: data.lectures });
    } catch (error) {
      dispatch({
        type: 'getCourseLectureFail',
        payload: error.response.data.message,
      });
    }
  };
