import axios from "axios";
import { server } from "../store";

//create Course
export const createCourse =(formData) =>async dispatch => {
    try {

        const config={
            headers:{
                "Content-Type":'multipart/form-data' //create course e image e send korbo tai e eita dite hobe
            },
            withCredentials:true
        }

      dispatch({ type: 'createCourseRequest' }); 

    //   title,description,category,createdBy

      const { data } = await axios.post(
        `${server}/createcourse`,formData,config
      );

      console.log("createCourseData", data)


      dispatch({ type: 'createCourseSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'createCourseFail',
        payload: error.response.data.message,
      });
    }
  };

  //delete Course

  export const deleteCourse = id => async dispatch => {
    try {
      const config = {
        withCredentials: true,
      };
      dispatch({ type: 'deleteCourseRequest' });
  
      const { data } = await axios.delete(`${server}/course/${id}`, config);
  
      dispatch({ type: 'deleteCourseSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'deleteCourseFail',
        payload: error.response.data.message,
      });
    }
  };