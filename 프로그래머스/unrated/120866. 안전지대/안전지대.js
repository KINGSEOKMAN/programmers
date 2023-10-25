function solution(board) {
  const n = board.length;
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  function isSafe(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
  }

  let safeCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        let isSafeArea = true;

        for (const [dx, dy] of directions) {
          const newX = i + dx;
          const newY = j + dy;

          if (isSafe(newX, newY) && board[newX][newY] === 1) {
            isSafeArea = false;
            break;
          }
        }

        if (isSafeArea) {
          safeCount++;
        }
      }
    }
  }

  return safeCount;
}