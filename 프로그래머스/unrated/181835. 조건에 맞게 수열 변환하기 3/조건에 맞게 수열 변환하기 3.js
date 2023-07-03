function solution(arr, k) {
  const n = arr.length;

  if (k % 2 === 1) {
    // k가 홀수인 경우
    for (let i = 0; i < n; i++) {
      arr[i] *= k;
    }
  } else {
    // k가 짝수인 경우
    for (let i = 0; i < n; i++) {
      arr[i] += k;
    }
  }

  return arr;
}
