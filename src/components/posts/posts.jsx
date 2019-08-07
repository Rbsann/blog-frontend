import React from 'react';
import {Header} from '../header/header';
import {Navigation} from '../navigation/navigation';
import {Footer} from '../footer/footer';
 

export const Posts = (props)=>(
    <div className='main'>
        <Navigation></Navigation>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <h1>{props.location.data.title}</h1>
                    <p>{props.location.data.post}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
)


