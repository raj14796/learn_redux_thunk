import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "../action/fetchPostsAction ";
const initialState = {
    items : [],
    loading : true,
    error : null
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading : true,
                error : null
            }
            break;
        case FETCH_POSTS_SUCCESS:
            return{
                ...state,
                loading : false,
                items : action.payLoad
            }
            break;
            case FETCH_POSTS_FAILURE:
                return{
                    ...state,
                    loading : true,
                    error : action.error
                }
        default: 
            console.log(state)
            return state;
            break;
    }
}


