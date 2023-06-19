function solution(arr) {
  let count = 0; 
  let arrCopy = [...arr]; 

  while (true) {
    count++;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
        arr[i] /= 2;
      } else if (arr[i] < 50 && arr[i] % 2 === 1) {
        arr[i] = arr[i] * 2 + 1;
      }
    }
    if(!arr.every((value, index) => value === arrCopy[index])){
            arrCopy=[...arr];
        }else if(arr.every((value, index) => value === arrCopy[index])){
            break;
        }
    }
    return count-1;
}



