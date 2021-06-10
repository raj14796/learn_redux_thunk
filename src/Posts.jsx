import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts} from './action/fetchPostsAction ';


const Posts = () => {

    const dispatch = useDispatch();
    const myState = useSelector((state) => state.postsReducer);

    useEffect(() => {
        dispatch(fetchPosts());
    },[])

    const renderPosts = () =>{
        if(myState.loading){
           return <h1>Loading...</h1>
        }
        return (
            myState.items.map((ele)=>{
                return <h5>userID : {ele.userId}, Title : {ele.title} </h5>
            })
        )
    }

    return (
        <div>
            {renderPosts()}
            {/* {JSON.stringify(myState)} */}
        </div>
    )
}

export default Posts
