function solution(myString) {
    let result = '';
    for (let i = 0; i < myString.length; i++) {
        let char = myString.charAt(i);
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}