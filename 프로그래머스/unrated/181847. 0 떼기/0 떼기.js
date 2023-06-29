function solution(n_str) {
    for(let i = 0; i < n_str.length; i++){
        const num = n_str[i];
        if(0!==parseInt(num)){
            return n_str.slice(i)
        }
    }
}