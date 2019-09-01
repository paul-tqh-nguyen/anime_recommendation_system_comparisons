import React, {Component} from 'react';
import {titleText} from './MiscComponentUtilities';
import {DefaultPageContent} from './DefaultPageContent/DefaultPageContent';
import {DancingDiamonds} from './DancingDiamonds/DancingDiamonds';

export class App extends Component {
    constructor(props) {
        super(props);
        let title = document.getElementsByTagName('title')[0];
        title.innerText = titleText;
    }
    
    render() {
        return (
            <DancingDiamonds/> // @todo something with this
            //<DefaultPageContent/>
        );
    }
}

