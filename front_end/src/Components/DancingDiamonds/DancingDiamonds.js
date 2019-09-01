
import React, {Component} from 'react';
import './DancingDiamonds.scss';

const numberOfMovingBars = 100;
const movingBarAnimationTimeInSeconds = 10;
const numberOfVisiblyTouchingMovingBarSets = 2.5;

export class DancingDiamonds extends Component {
    render() {
        let topMovingBars = [];
        let bottomMovingBars = [];
        let movingBarWidth = 100/numberOfMovingBars;
        for(var movingBarIndex = 0; movingBarIndex < numberOfMovingBars; movingBarIndex++) {
            let animationDelayTimeInSeconds = movingBarIndex*numberOfVisiblyTouchingMovingBarSets * (movingBarAnimationTimeInSeconds/numberOfMovingBars);
            let movingBarIndexDependentStyle = {
	        width: `${movingBarWidth}vw`,
                animationDelay: `${animationDelayTimeInSeconds}s`,
	        animationDuration: `${movingBarAnimationTimeInSeconds}s`,
                left: `${movingBarIndex*movingBarWidth}vw`,
            };
            topMovingBars.push(<div style={movingBarIndexDependentStyle} className="top-moving-bar" key={`Loading Bar ${movingBarIndex}`}></div>);
            bottomMovingBars.push(<div style={movingBarIndexDependentStyle} className="bottom-moving-bar" key={`Loading Bar ${movingBarIndex}`}></div>);
        }
        return (
            <div>
              <div id="loading-screen-text">Loading...</div>
              <div id="moving-bars-container">
                {topMovingBars}
                {bottomMovingBars}
              </div>
            </div>
        );
    }
}
