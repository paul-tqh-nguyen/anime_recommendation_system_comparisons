import React, {Component} from 'react';
import './GoodEats.scss';
import {Fork} from './Fork';
import {Knife} from './Knife';

export class GoodEats extends Component {
    render() {
        return (
            <div id="good-eats-container">
              <Knife />
              <Fork />
            </div>
        );
    }
}
