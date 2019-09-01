import React, {Component} from 'react';
import {titleText} from './MiscComponentUtilities';
import {DefaultPageContent} from './DefaultPageContent/DefaultPageContent';
import {DancingDiamonds} from './DancingDiamonds/DancingDiamonds';

export class App extends Component {
    componentDidMount() {
        let title = document.getElementsByTagName('title')[0];
        title.innerText = titleText;
    }
    
    render() {
        let currentHash = window.location.hash.slice(1);
        let renderedContent = null;
        console.log(currentHash);
        switch (currentHash) {
        case 'dancing-diamonds':
            renderedContent = <DancingDiamonds/>;
            break;
        default:
            renderedContent = <DefaultPageContent/>;
        }
        return renderedContent;
    }
}

