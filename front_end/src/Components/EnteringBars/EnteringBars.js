import React, {Component} from 'react';
import {isEven} from '../MiscComponentUtilities';
import './EnteringBars.scss';

const animationDurationUpperBoundInMilliseconds = 5000;
const animationDelayInMilliseconds = 1000;
const numberOfBarsOnSmallerDimension = 10;
const movingBarBaseZIndex = 10;
const preSelectedHorizontalColors = ['#37474f', '#455a64', '#546e7a', '#607d8b', '#78909c', '#90a4ae', '#b0bec5'];
const preSelectedVerticalColors = preSelectedHorizontalColors.slice(0).reverse();

export class EnteringBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfVerticallyMovingBars: null,
            numberOfHorizontallyMovingBars: null,
            verticallyMovingBarWidthInPixels: null,
            horizontallyMovingBarWidthInPixels: null,
            updatingInterval: null,
        };
    }

    updateNumberOfBars() {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let heightIsSmallerDimension = (windowWidth > windowHeight);
        let updatedVerticallyMovingBarWidthInPixels = 0;
        let updatedHorizontallyMovingBarWidthInPixels = 0;
        if (heightIsSmallerDimension) {
            updatedHorizontallyMovingBarWidthInPixels = windowHeight/numberOfBarsOnSmallerDimension;
            updatedVerticallyMovingBarWidthInPixels = windowWidth/Math.floor(windowWidth/updatedHorizontallyMovingBarWidthInPixels);
        } else {
            updatedVerticallyMovingBarWidthInPixels = windowWidth/numberOfBarsOnSmallerDimension;
            updatedHorizontallyMovingBarWidthInPixels = windowHeight/Math.floor(windowHeight/updatedVerticallyMovingBarWidthInPixels);
        }
        this.setState({
            numberOfVerticallyMovingBars: Math.ceil(windowWidth / updatedVerticallyMovingBarWidthInPixels),
            numberOfHorizontallyMovingBars: Math.ceil(windowHeight / updatedHorizontallyMovingBarWidthInPixels),
            verticallyMovingBarWidthInPixels: updatedVerticallyMovingBarWidthInPixels,
            horizontallyMovingBarWidthInPixels: updatedHorizontallyMovingBarWidthInPixels,
        });
    }
    
    componentDidMount() {
        this.updateNumberOfBars();
        this.updatingInterval = setInterval(() => {this.updateNumberOfBars();}, animationDurationUpperBoundInMilliseconds);
    }

    componentWillUnmount() {
        clearInterval(this.updatingInterval);
    }

    zIndexDeltaForDominatingBarType(movingBarIndex, numberOfNonDominatingMovingBars) {
        let zIndexDelta = 0;
        let indexOfCurrentSquare = Math.floor(movingBarIndex/numberOfNonDominatingMovingBars);
        let inEvenNumberthSquare = isEven(indexOfCurrentSquare);
        let relativeMovingBarIndex = (movingBarIndex % (numberOfNonDominatingMovingBars));
        if (inEvenNumberthSquare) {
            zIndexDelta = relativeMovingBarIndex*2;
        } else {
            zIndexDelta = (numberOfNonDominatingMovingBars-1-relativeMovingBarIndex)*2;
        }
        return zIndexDelta;
    }
    
    zIndexForMovingBar(movingBarIndex, isVerticalMovingBar) {
        let {numberOfVerticallyMovingBars, numberOfHorizontallyMovingBars} = this.state;
        let zIndex = movingBarBaseZIndex;
        if (!isVerticalMovingBar) {
            zIndex++;
        }
        let moreVerticalMovingBars = numberOfVerticallyMovingBars > numberOfHorizontallyMovingBars;
        let moreHorizontalMovingBars = numberOfVerticallyMovingBars < numberOfHorizontallyMovingBars;
        let isHorizontalMovingBar = !isVerticalMovingBar;
        if (moreVerticalMovingBars && isVerticalMovingBar) {
            zIndex += this.zIndexDeltaForDominatingBarType(movingBarIndex, numberOfHorizontallyMovingBars);
        } else if (moreHorizontalMovingBars && isHorizontalMovingBar) {
            zIndex += this.zIndexDeltaForDominatingBarType(movingBarIndex, numberOfVerticallyMovingBars);
        } else {
            zIndex += (movingBarIndex%numberOfHorizontallyMovingBars)*2;
        }
        return zIndex;
    }

    styleForVerticallyMovingBar(movingBarIndex, isVerticalMovingBar) {
        let {verticallyMovingBarWidthInPixels, horizontallyMovingBarWidthInPixels} = this.state;
        let preselectedColors = isVerticalMovingBar ? preSelectedVerticalColors : preSelectedHorizontalColors;
        let backgroundColorInHex = preselectedColors[movingBarIndex%preselectedColors.length];
        let zIndex = this.zIndexForMovingBar(movingBarIndex, isVerticalMovingBar);
        let style = {
            zIndex: zIndex,
            background: backgroundColorInHex,
            border: `1px solid ${backgroundColorInHex}`,
            animationDuration: `${animationDurationUpperBoundInMilliseconds}ms`,
            animationDelay: `${movingBarIndex*animationDelayInMilliseconds}ms`,
        };
        if (isVerticalMovingBar) {
            style.left = `${movingBarIndex*verticallyMovingBarWidthInPixels}px`;
            style.width = `${verticallyMovingBarWidthInPixels}px`;
            style.height = `0`;
        } else {
            style.top = `${movingBarIndex*horizontallyMovingBarWidthInPixels}px`;
            style.width = `0`;
            style.height = `${horizontallyMovingBarWidthInPixels}px`;
        }
        return style;
    }
    
    render() {
        let {numberOfVerticallyMovingBars, numberOfHorizontallyMovingBars} = this.state;
        let verticallyMovingBars = [];
        for(var verticallyMovingBarIndex = 0; verticallyMovingBarIndex<numberOfVerticallyMovingBars; verticallyMovingBarIndex++) {
            let style = this.styleForVerticallyMovingBar(verticallyMovingBarIndex, true);
            verticallyMovingBars.push(<div style={style} className='vertically-moving-bars' key={`Vertically Moving Bar ${verticallyMovingBarIndex}`}></div>);
        }
        let horizontallyMovingBars = [];
        for(var horizontallyMovingBarIndex = 0; horizontallyMovingBarIndex<numberOfHorizontallyMovingBars; horizontallyMovingBarIndex++) {
            let style = this.styleForVerticallyMovingBar(horizontallyMovingBarIndex, false);
            horizontallyMovingBars.push(<div style={style} className='horizontally-moving-bars' key={`Horizontally Moving Bar ${horizontallyMovingBarIndex}`}></div>);
        }
        return (
            <div id='entering-bars-container'>
              {verticallyMovingBars}
              {horizontallyMovingBars}
            </div>
        );
    }
}
