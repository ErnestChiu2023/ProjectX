export { SET_USER_ID } from '../actionTypes';

export default userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'set_user_id':
            return {
                ...state,
                userId: action.payload.userId,
            }
        default:
            return state;
    }
    
}