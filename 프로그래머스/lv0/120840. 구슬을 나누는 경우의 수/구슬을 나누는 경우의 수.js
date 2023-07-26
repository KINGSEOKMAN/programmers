function solution(balls, share) {
    let answer = 0;
    
    let factorial1 = 1;
    for(let i = balls; i>=balls-share+1; i--){
        factorial1*=i;
    }
    let factorial2 = 1;
    for(let i = share; i>=1; i--){
        factorial2*=i;
    }
    answer = Math.floor(factorial1/factorial2);
    return answer
}