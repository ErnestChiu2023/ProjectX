import { 
  SET_USER_ID,
  SET_USER_PROJECTS,
  SET_USER_DISPLAY_NAME,
} from './actionTypes';

export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    payload: { userId },
  }
}

export const setUserProjects = (projects) => {
  return {
    type: SET_USER_PROJECTS,
    payload: { projects },
  }
}

export const setUserDisplayName = (displayName) => {
  return {
    type: SET_USER_DISPLAY_NAME,
    payload: { displayName }, 
  }
}