function solution(s) {
    const sortedString = s.split('').sort().join('');
  let result = '';
  for (let i = 0; i < sortedString.length; i++) {
    if (sortedString[i] !== sortedString[i - 1] && sortedString[i] !== sortedString[i + 1]) {
      result += sortedString[i];
    }
  }

  return result;
}