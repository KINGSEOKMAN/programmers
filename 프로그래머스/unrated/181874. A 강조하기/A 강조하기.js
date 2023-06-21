function solution(myString) {
    let lowerString = myString.toLowerCase();
    let result = "";

    for (let i = 0; i < lowerString.length; i++) {
        if (lowerString[i] === 'a') {
            result += 'A';
        } else {
            result += lowerString[i];
        }
    }

    return result;
}