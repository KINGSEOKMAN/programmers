function solution(array, n) {
    let answer=0; //최소 
    let dis=Number.MAX_VALUE; //현재 최소거리 값
    
     for (const element of array) {
         const a = Math.abs(n-element); // 거리값 
         if(a<dis){
             dis=a;
             answer=element
         }else if(dis===a){
             answer = element < answer?element:answer 
         }
    }
    return answer;
        
}