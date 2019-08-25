import React, {Component} from 'react';
import {titleText, githubRepoLink, githubWikiLink, githubREADMELink} from './MiscComponentUtilities';

export class App extends Component {
    constructor(props) {
        super(props);
        let title = document.getElementsByTagName('title')[0];
        title.innerText = titleText;
    }
    
    render() {
        return (
            <div id="app"> {/* @todo add a css styling for this id */}
              {titleText}
              <p>
                Hello! Welcome to {titleText}!
              </p>
              <p>
                This is a demonstration of several loading screens that can be used in React applications.
              </p>
              <p>
                See our <a title='React Loading Pages Github README' href={githubREADMELink}>README</a> or <a title='React Loading Pages Github Wiki' href={githubWikiLink}>wiki</a> relevant to <a title='React Loading Pages Github Repository' href={githubRepoLink}>our github repository</a> for more details. 
              </p>
              <p>
                The loading screens available for demoing are:
                <ul>@todo put something here</ul>
              </p>
            </div>
        );
    }
}

