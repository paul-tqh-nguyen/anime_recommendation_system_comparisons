import React, {Component} from 'react';
import './Fork.scss';

export class Fork extends Component {
    render() {
        return (
            <div className="fork">
              <div className="fork-tine fork-tine-left"></div>
              <div className="fork-tine fork-tine-middle"></div>
              <div className="fork-tine fork-tine-right"></div>
              <div className="fork-tine-base"></div>
              <div className="fork-handle"></div>
            </div>
        );
    }
}
