function solution(q, r, code) {
    var answer = '';

    code.split("").forEach((e,i) => {if(i % q == r) answer += e});

    return answer;
}