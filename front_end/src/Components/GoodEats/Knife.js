import React, {Component} from 'react';
import './Knife.scss';

export class Knife extends Component {
    render() {
        return (
            <div className="knife">
              <div className="knife-blade"></div>
              <div className="knife-handle"></div>
            </div>
        );
    }
}
