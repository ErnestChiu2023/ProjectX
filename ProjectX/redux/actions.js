import { 
  SET_USER_ID,
  GET_USER_PROJECTS,
} from './actionTypes';

export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    payload: { userId },
  }
}

export const getUserProjects = (projects) => {
  return {
    type: GET_USER_PROJECTS,
    payload: { projects },
  }
}