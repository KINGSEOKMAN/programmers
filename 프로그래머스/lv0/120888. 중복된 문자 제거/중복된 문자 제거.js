function solution(my_string) {
    const a =  [...new Set(my_string)].join("");
    return a
}

