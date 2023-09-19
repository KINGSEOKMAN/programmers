function isCorrectExpression(expression) {
  const [x, operator, y, _, z] = expression.split(' ');

  const numX = parseInt(x);
  const numY = parseInt(y);
  const numZ = parseInt(z);

  let calculatedResult;
  if (operator === '+') {
    calculatedResult = numX + numY;
  } else if (operator === '-') {
    calculatedResult = numX - numY;
  }

  return calculatedResult === numZ;
}

function solution(quiz) {
  const results = [];
  for (const expression of quiz) {
    const isCorrect = isCorrectExpression(expression);
    results.push(isCorrect ? 'O' : 'X');
  }
  return results;
}