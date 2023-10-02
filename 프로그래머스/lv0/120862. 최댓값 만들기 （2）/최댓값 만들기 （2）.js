function solution(numbers) {
  numbers.sort((a, b) => a - b);

  const maxProduct = numbers[numbers.length - 1] * numbers[numbers.length - 2];
  const minProduct = numbers[0] * numbers[1];
  
  return Math.max(maxProduct, minProduct);
}