function solution(arr) {
    const length=arr.length;
    const square=Math.pow(2,Math.ceil(Math.log2(length)))
     if ((length & (length - 1)) === 0) {
          return arr;
     }
     else{
         const num = square-length;
         for(let i=0; i<num; i++){
             arr.push(0)
         }
     }
    return arr;
 
   
}