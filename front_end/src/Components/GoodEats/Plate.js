
import React, {Component} from 'react';
import './Plate.scss';

export class Plate extends Component {
    render() {
        return (
            <div>
              <div className="chicken">
                <div className="chicken-body">
                  <div className="chicken-body-top"></div>
                  <div className="chicken-body-bottom"></div>
                </div>
                <div className="drumstick">
                  <div className="drumstick-meat">
                    <div className="drumstick-meat-semi-circle"></div>
                    <div className="drumstick-meat-triangle-container">
                      <div className="drumstick-meat-triangle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
