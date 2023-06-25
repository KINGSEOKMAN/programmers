function solution(arr, k) {
    const NewArr=[...new Set(arr)];
    const result=[];
    for(let i = 0 ; i<k; i++){
        if(NewArr.length-1<i){
            result.push(-1);
        }else{
            result.push(NewArr[i]);
        }
    }
  return result;
}