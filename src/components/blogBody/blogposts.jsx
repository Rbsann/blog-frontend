import React from 'react';
import './blogposts.css';
import {Link} from 'react-router-dom';
import Truncate from 'react-truncate';

export const BlogBody = (props)=>(

    <div className='placeholder'>
    {
        props.posts.map(post=>(
            
            <div key={post._id} className='postBody'>
                <Link to={{pathname:'/posts/'+post.title,data:post.post}}>
                    <h1>{post.title}</h1>
                </Link>
                <Truncate lines={2}>
                    <h3>{post.post}</h3>
                </Truncate>
            </div>
        ))
    }
    </div>
);