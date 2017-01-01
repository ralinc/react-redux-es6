import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi.js';

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().
      then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).
      catch(error => {
        console.log(error);
      });
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    return courseApi.saveCourse(course).
      then(saved => {
        course.id ?
          dispatch(updateCourseSuccess(saved)) :
          dispatch(createCourseSuccess(saved));
      }).
      catch(error => {
        console.log(error);
      });
  };
}

export function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course
  };
}

export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course
  };
}
