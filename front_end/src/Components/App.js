import React, {Component} from 'react';
import {titleText} from './MiscComponentUtilities';
import {DefaultPageContent} from './DefaultPageContent/DefaultPageContent';
import {DancingDiamonds} from './DancingDiamonds/DancingDiamonds';

const locationHashToLoadingScreenComponentMap = {
    'dancing-diamonds': <DancingDiamonds/>,
};

export class App extends Component {
    componentDidMount() {
        let title = document.getElementsByTagName('title')[0];
        title.innerText = titleText;
    }
    
    render() {
        let currentHash = window.location.hash.slice(1);
        let availableLoadingScreens = Object.keys(locationHashToLoadingScreenComponentMap);
        let renderedContent = currentHash in locationHashToLoadingScreenComponentMap ?
            locationHashToLoadingScreenComponentMap[currentHash] :
            <DefaultPageContent availableLoadingScreens={availableLoadingScreens}/>;
        return renderedContent;
    }
}

