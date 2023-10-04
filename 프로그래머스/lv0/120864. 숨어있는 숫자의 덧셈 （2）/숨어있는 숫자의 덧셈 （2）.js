function solution(my_string) {
  const numbers = my_string.match(/\d+/g);
  let sum = 0;

  if (numbers) {
    for (const number of numbers) {
      sum += parseInt(number);
    }
  }

  return sum;
}