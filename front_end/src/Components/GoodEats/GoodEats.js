import React, {Component} from 'react';
import './GoodEats.scss';
import {Fork} from './Fork';
import {Knife} from './Knife';
import {Plate} from './Plate';

export class GoodEats extends Component {
    render() {
        return (
            <div id="good-eats-container">
              <Plate/>
              {/*
                 <div className='knife-container'>
                 <div className='utensil-initial-rotation'>
                 <Knife/>
                 </div>
                 </div>
                 <div className='fork-container'>
                 <div className='utensil-initial-rotation'>
                 <Fork/>
                 </div>
                 </div>
               */}
            </div>
        );
    }
}
