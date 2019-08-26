import React, {Component} from 'react';
import {titleText} from './MiscComponentUtilities';
import {DefaultPageContent} from './DefaultPageContent';

export class App extends Component {
    constructor(props) {
        super(props);
        let title = document.getElementsByTagName('title')[0];
        title.innerText = titleText;
    }
    
    render() {
        return (
            <DefaultPageContent/>
        );
    }
}

