function solution(my_string) {
   const counts = Array(52).fill(0);
  
    
  
  for (let i = 0; i < my_string.length; i++) {
        const charCode = my_string.charCodeAt(i);
        if(charCode>=65 && charCode<=90){
            counts[charCode-65]+=1
        }else{
            counts[charCode-97+26]+=1
        }
     
  }
  
  return counts;
  
}
