function solution(n) {
    let count = 0; 
    let current = 1; 

    while (count < n) {
        if (current % 3 !== 0 && !current.toString().includes('3')) {
            count++;
        }
        current++;
    }

    return current - 1;
}
