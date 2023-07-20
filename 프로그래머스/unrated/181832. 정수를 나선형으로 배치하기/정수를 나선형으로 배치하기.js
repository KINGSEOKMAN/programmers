function solution(n) {
    

  const matrix = new Array(n).fill(null).map(() => new Array(n).fill(0));     // 배열 생성
  let num = 1; // 채울값 
  let rowStart = 0, rowEnd = n - 1, colStart = 0, colEnd = n - 1; 

  while (num <= n * n) {
      
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[rowStart][i] = num++;
    }
    rowStart++;

    // 위 -> 아래
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = num++;
    }
    colEnd--;

    // 오른쪽 -> 왼쪽
    for (let i = colEnd; i >= colStart; i--) {
      matrix[rowEnd][i] = num++;
    }
    rowEnd--;

    // 아래 -> 위
    for (let i = rowEnd; i >= rowStart; i--) {
      matrix[i][colStart] = num++;
    }
    colStart++;
  }

  return matrix;
}

