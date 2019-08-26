import React, {Component} from 'react';

const numberOfBars = 100;
const movingBarAnimationDurationInSeconds = 4;

export class DefaultPageAnimatedBars extends Component {
    render() {
        let movingBars = [];
        let movingBarAnimationDurationInSecondsAsString = parseInt(movingBarAnimationDurationInSeconds);
        for(var movingBarIndex = 0; movingBarIndex<numberOfBars; movingBarIndex++) {
            let movingBarWaitTime = movingBarIndex * movingBarAnimationDurationInSeconds / numberOfBars;
            let style = {paddingTop: '100%',
                         width: `100%`,
                         height: `100%`,
                         animation: `moving-bar-animation ${movingBarAnimationDurationInSecondsAsString}s ease-in-out`,
                         animationDelay: `${movingBarWaitTime}s`,
                        };
            movingBars.push(<div style={style} key={`Moving Bar ${movingBarIndex}`}></div>);
        };
        return <div id='moving-bars-container'>{movingBars}</div>;
    }
}
