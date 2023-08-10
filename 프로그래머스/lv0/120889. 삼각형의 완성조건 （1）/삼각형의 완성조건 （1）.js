function solution(sides) {
  sides.sort((a, b) => a - b);  
  const max = sides[2];
  const sum = sides[0] + sides[1];
  if (max >= sum) {
    return 2;  
  } else {
    return 1;  
  }
}


