
export const titleText = 'React Loading Screens';
export const githubRepoLink = 'https://github.com/paul-tqh-nguyen/react_loading_screens';
export const githubWikiLink = 'https://github.com/paul-tqh-nguyen/react_loading_screens/wiki';
export const githubREADMELink = 'https://github.com/paul-tqh-nguyen/react_loading_screens/blob/master/README.md';

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
