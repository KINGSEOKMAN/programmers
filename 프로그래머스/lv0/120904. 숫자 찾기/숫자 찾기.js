function solution(num, k) {
    const result = num.toString().split('').indexOf(k.toString())
    return result === -1 ? result : result+1
}