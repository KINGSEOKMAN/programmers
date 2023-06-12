function solution(l, r) {
  const result = [];
  for (let num = l; num <= r; num++) {
    if (String(num).split('').every(digit => digit === '0' || digit === '5')) {
      result.push(num);
    }
  }
  if (result==false) {
    return [-1];
  } else {
    return result;
  }
}
