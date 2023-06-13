function solution(my_string) {
  const suffixes = []; // 새로담을 배열
  
  for (let i = 0; i < my_string.length; i++) {
    suffixes.push(my_string.substr(i));
  }
  suffixes.sort();
  return suffixes;
}