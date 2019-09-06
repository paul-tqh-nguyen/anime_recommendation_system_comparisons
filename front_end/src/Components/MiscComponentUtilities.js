
export const titleText = 'React Loading Screens';
export const githubRepoLink = 'https://github.com/paul-tqh-nguyen/react_loading_screens';
export const githubWikiLink = 'https://github.com/paul-tqh-nguyen/react_loading_screens/wiki';
export const githubREADMELink = 'https://github.com/paul-tqh-nguyen/react_loading_screens/blob/master/README.md';

var assert = require('assert');

export function isEven(integerValue) {
    return (integerValue%2)==0;
}

export function isOdd(integerValue) {
    return (integerValue%2)==0;
}

export function randomChoice(inputArray) {
    return inputArray[randomInteger(inputArray.length)];
}

export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for(var i = 0; i < 6; i++) {
        color += randomChoice(letters);
    }
    return color;
}

export function rgbToHex (rgb) { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

export function sumOfSquaresDistance(inputArrayA,inputArrayB) {
    assert(inputArrayA.length === inputArrayB.length);
    let distance = 0;
    for(var dimensionIndex = 0; dimensionIndex<inputArrayB.length; dimensionIndex++) {
        distance += inputArrayA[dimensionIndex]*inputArrayA[dimensionIndex] + inputArrayB[dimensionIndex]*inputArrayB[dimensionIndex];
    }
    return distance;
}

export function randomInteger(integerInput) {
    return Math.floor(Math.random() * integerInput);
}

function capitalizeWords(string) {
    var words = string.toLowerCase().split(' ');
    words.forEach((word, wordIndex) => words[wordIndex] = word.charAt(0).toUpperCase() + word.substring(1));
    let conjoinedWords = words.join(' ');
    return conjoinedWords;
}

export function dwimLoadingScreenLinkToHumanReadableAnchorTitle(loadingScreenLink) {
    let title = loadingScreenLink.replace("-", " ");
    title = capitalizeWords(title);
    return title;
}
