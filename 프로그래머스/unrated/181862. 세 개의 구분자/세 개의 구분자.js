function solution(myStr) {
const arr = myStr
        .replaceAll("a"," ")
        .replaceAll("b"," ")
        .replaceAll("c"," ")
        .split(" ")
        .filter(item => item !== "")
        return arr.length === 0 ? ["EMPTY"] : arr;
}

        
