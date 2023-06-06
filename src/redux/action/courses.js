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
