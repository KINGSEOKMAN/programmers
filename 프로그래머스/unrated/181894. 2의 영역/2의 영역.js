function solution(arr) {
  const index = [];
  const result = [];

  arr.forEach((item, i) => {
    if (item == 2) {
      index.push(i);
    }
  });

  if (index.length === 0) {
    return [-1];
  }

  const first = index[0];
  const last = index[index.length - 1];

  for (let i = first; i <= last; i++) {
    result.push(arr[i]);
  }

  return result;
}