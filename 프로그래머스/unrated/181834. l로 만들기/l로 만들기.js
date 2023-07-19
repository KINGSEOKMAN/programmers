
function solution(myString) {
    for(let i = 0; i < myString.length; i++) {
        if(myString[i] < "l") {
            myString = myString.replace(myString[i], "l");
        }
    }
    return myString;
}