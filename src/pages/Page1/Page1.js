import React, {Component} from 'react';

import './Page1.css';

import image from './images/brickpsert.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                I am a cute
                <img src={image}/>
            </div>
        )
    }
}