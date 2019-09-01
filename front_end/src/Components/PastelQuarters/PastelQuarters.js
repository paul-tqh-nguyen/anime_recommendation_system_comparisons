import React, {Component} from 'react';
import './PastelQuarters.scss';

const pastelColors = ['#97F2F3', '#AB6393', '#2E8364', '#E18D96'];

const numMillisecondsBetweenColorChanges = 1000;

export class PastelQuarters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upperLeftColorIndex: 0,
            upperRightColorIndex: 1,
            lowerLeftColorIndex: 3,
            lowerRightColorIndex: 2,
            colorLoopingInterval: null,
        };
    }

    updateColors() {
        let {upperLeftColorIndex, upperRightColorIndex, lowerLeftColorIndex, lowerRightColorIndex} = this.state;
        this.setState({
            upperLeftColorIndex: (upperLeftColorIndex+1)%(pastelColors.length),
            upperRightColorIndex: (upperRightColorIndex+1)%(pastelColors.length),
            lowerLeftColorIndex: (lowerLeftColorIndex+1)%(pastelColors.length),
            lowerRightColorIndex: (lowerRightColorIndex+1)%(pastelColors.length),
        });
    }
    
    componentDidMount() {
        this.updateColors();
        this.colorLoopingInterval = setInterval(() => {this.updateColors();}, numMillisecondsBetweenColorChanges);
    }
    
    componentWillUnmount() {
        clearInterval(this.colorLoopingInterval);
    }
    
    render() {
        let {upperLeftColorIndex, upperRightColorIndex, lowerLeftColorIndex, lowerRightColorIndex} = this.state;
        let upperLeftColor = pastelColors[upperLeftColorIndex];
        let upperRightColor = pastelColors[upperRightColorIndex];
        let lowerLeftColor = pastelColors[lowerLeftColorIndex];
        let lowerRightColor = pastelColors[lowerRightColorIndex];
        return (
            <div>
              <div style={{background: upperLeftColor}} id="pastel-quarter-upper-left"></div>
              <div style={{background: upperRightColor}} id="pastel-quarter-upper-right"></div>
              <div style={{background: lowerLeftColor}} id="pastel-quarter-lower-left"></div>
              <div style={{background: lowerRightColor}} id="pastel-quarter-lower-right"></div>
            </div>
        );
    }
}
