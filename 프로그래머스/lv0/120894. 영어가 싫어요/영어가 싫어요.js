function solution(numbers) {
    const wordToNum = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    let result = '';
    let currentWord = '';

    for (let i = 0; i < numbers.length; i++) {
        currentWord += numbers[i];
        if (currentWord in wordToNum) {
            result += wordToNum[currentWord];
            currentWord = ''; 
        }
    }

    return parseInt(result);
}