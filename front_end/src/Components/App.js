import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {titleText} from './MiscComponentUtilities';
import {DefaultPageContent} from './DefaultPageContent/DefaultPageContent';
import {DancingDiamonds} from './DancingDiamonds/DancingDiamonds';

const locationHashToLoadingScreenComponentMap = {
    'dancing-diamonds': DancingDiamonds,
};

export class App extends Component {
    componentDidMount() {
        let title = document.getElementsByTagName('title')[0];
        title.innerText = titleText;
    }
    
    render() {
        let availableLoadingScreens = Object.keys(locationHashToLoadingScreenComponentMap);
        return (
            <BrowserRouter>
              <Route path='/' render={(props) => <DefaultPageContent availableLoadingScreens={availableLoadingScreens}/>} exact/>
              {availableLoadingScreens.map((loadingScreenLink) => {
                  let path = `/${loadingScreenLink}`;
                  return <Route path={path} component={locationHashToLoadingScreenComponentMap[loadingScreenLink]}/>;
              })}
            </BrowserRouter>
        );
    }
}

