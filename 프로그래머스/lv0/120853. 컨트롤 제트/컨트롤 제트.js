function solution(s) {
  let stack = [];
  let elements = s.split(" ");
  for (let elem of elements) {
    if (elem === "Z") {
      stack.pop();
    } else {
      stack.push(parseInt(elem));
    }
  }

  return stack.reduce((sum, num) => sum + num, 0);
}


