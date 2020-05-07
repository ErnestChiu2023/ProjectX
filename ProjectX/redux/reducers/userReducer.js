export { SET_USER_ID } from '../actionTypes';

export default userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'set_user_id':
            return {
                ...state,
                userId: action.payload.userId,
            }
        case 'get_user_projects':
            return {
                ...state,
                userProjects: action.payload.projects,
            }
        default:
            return state;
    }
    
}