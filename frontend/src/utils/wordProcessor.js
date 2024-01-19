export const isImportantWord = (word, index, words) => {
    const isFirstWord = index === 0;
    const isUpperCase = /^[A-Z]/.test(word);
    const previousWord = index > 0 ? words[index - 1] : '';
    const isAfterPunctuation = /[.?!]/.test(previousWord);
    return !isFirstWord && isUpperCase && !isAfterPunctuation;
};