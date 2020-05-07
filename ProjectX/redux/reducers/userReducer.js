import { 
  SET_USER_ID, 
  SET_USER_PROJECTS,
  SET_USER_DISPLAY_NAME,
} from '../actionTypes';

export default userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload.userId,
      }
  case SET_USER_PROJECTS:
      return {
        ...state,
        userProjects: action.payload.projects,
      }
    case SET_USER_DISPLAY_NAME:
      return {
        ...state,
        userDisplayName: action.payload.displayName
      }
    default:
        return state;
}
}