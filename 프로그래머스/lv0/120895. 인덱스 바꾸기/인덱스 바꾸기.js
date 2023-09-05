function solution(my_string, num1, num2) {
  let charArray = my_string.split('');

  [charArray[num1], charArray[num2]] = [charArray[num2], charArray[num1]];

  return charArray.join('');
}
