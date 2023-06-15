function solution(arr, query) {
  let Arr = [...arr];
  for (let i = 0; i < query.length; i++) {
    const idx = query[i];
    if (i % 2 === 0) {
      Arr.splice(idx + 1);
    } else {
      Arr.splice(0, idx);
    }
  }
  return Arr;
}