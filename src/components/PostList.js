import React from "react";
import PhoneItem from "./PostItem";

function PostList({posts, title, remove}) {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            {posts.map(post => 
                <PhoneItem remove={remove} post={post} key={post.id}/>
            )}
        </div>
    );
}

export default PostList;