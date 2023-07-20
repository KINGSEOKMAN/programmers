function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  if (rows > cols) {
    for (let i = 0; i < rows; i++) {
      for (let j = arr[i].length; j < rows; j++) {
        arr[i].push(0);
      }
    }
  } else if (cols > rows) {
    for (let i = 0; i < cols - rows; i++) {
      const newRow = new Array(cols).fill(0);
      arr.push(newRow);
    }
  }

  return arr;
}

