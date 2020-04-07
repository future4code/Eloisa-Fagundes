const initialState = {
    allPosts: [],
    postDetail: null,
    postId: null,
}


const posts = (state = initialState, action) => {
    switch (action.type) {

        case "SET_POSTS":
            return {
                ...state,
                allPosts: action.payload.posts
            }

        case "SET_POST_DETAIL":
            return {
                ...state,
                postDetail: action.payload.post
            }

            case "SET_POST_ID":
            return {
                ...state,
                postId: action.payload.id
            }
            
        default:
            return state

    }
}

export default posts