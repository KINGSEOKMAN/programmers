function solution(n) {
    let result = 1;
    let factorial =1;
    while(factorial<=n){
        factorial *= result
       if (factorial > n) break; 
        result++
    }
    return result-1;
}
