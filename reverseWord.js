function reverseWords(sentence) {
    const words = sentence.split(' ');


    const reversedWords = words.map(word => {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        return reversedWord;
    });
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = "This is a sunny day";

const reversedSentence = reverseWords(inputSentence);

console.log(reversedSentence);
