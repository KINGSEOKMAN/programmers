function solution(arr, queries) {
    let min=[]; //조건에 맞는 값들을 넣을 배열
    let result=[]; //그 값 중 작은 값을 넣을 배열
  for(i=0; i<queries.length; i++){
        const [s,e,k]=queries[i];
        min=[];      
      for(j=s; j<=e; j++){
          if(arr[j]>k){
             min.push(arr[j])
          }
      }
      if(min==false){
          result.push(-1);
      }else{
           result.push(Math.min(...min))
      }
   
      
  }
    return result;
    
}
 