function solution(n) {
  let answer = [];
  let i = 2;

  while (n > 1) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  return [...new Set(answer)] // new Set() 중복값 제거
}