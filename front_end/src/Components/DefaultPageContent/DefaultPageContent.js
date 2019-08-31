import React, {Component} from 'react';
import {titleText, githubRepoLink, githubWikiLink, githubREADMELink} from '../MiscComponentUtilities';
import './DefaultPageContent.scss';

export class DefaultPageContent extends Component {
    render() {
        let renderedContent = 
            <div id="default-page-text">
              {titleText}
              <p>Hello! Welcome to {titleText}!</p>
              <p>This is a demonstration of several loading screens that can be used in React applications.</p>
              <p>See our <a title='React Loading Pages Github README' href={githubREADMELink}>README</a> or <a title='React Loading Pages Github Wiki' href={githubWikiLink}>wiki</a> relevant to <a title='React Loading Pages Github Repository' href={githubRepoLink}>our github repository</a> for more details.</p>
              <p>
                The loading screens available for demoing are:
                <ul>
                  <li>@todo put something here</li>
                </ul>
              </p>
            </div>;
        return (
            <div id="default-page-container">
              {renderedContent}
            </div>
        );
    }
}
