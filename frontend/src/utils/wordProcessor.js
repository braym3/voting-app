export const isImportantWord = (word, index, words) => {
    const isFirstWord = index === 0;
    const isUpperCase = /^[A-Z]/.test(word);
    const previousWord = index > 0 ? words[index - 1] : '';
    const isAfterPunctuation = /[.?!]/.test(previousWord);

    console.log(`Word: ${word}, Index: ${index !== undefined ? index : 'undefined'}, isFirstWord: ${isFirstWord}, isUpperCase: ${isUpperCase}, previousWord: ${previousWord}, isAfterPunctuation: ${isAfterPunctuation}`);

    return !isFirstWord && isUpperCase && !isAfterPunctuation;
};