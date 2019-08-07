import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';


export const Navigation = ()=>(
    <div className="wrapper navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
            </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to={{pathname:'/'}}>
                    <p className="link nav-link">Home</p>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={{pathname:'/about'}}>
                    <p className="link nav-link">About</p>
                </Link>
            </li>
            </ul>
        </div>
        </div>
    </div>
);