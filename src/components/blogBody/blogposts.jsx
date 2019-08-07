import React from 'react';
import './blogposts.css';
import {Link} from 'react-router-dom';
import Truncate from 'react-truncate';

export const BlogBody = (props)=>(

    <div className='row'>
    {
        props.posts.map(post=>(
            <div className='col-lg-8 col-md-10 mx-auto'>
                <div key={post._id} className='post-preview'>
                    <Link to={{pathname:'/posts/'+post.title,data:post}}>
                        <h2 className='post-title'>{post.title}</h2>
                    </Link>
                    <Truncate lines={2}>
                        <h3 className='post-subtitle'>{post.post}</h3>
                    </Truncate>
                    <hr></hr>
                </div>
            </div>
        ))
    }
    </div>
);