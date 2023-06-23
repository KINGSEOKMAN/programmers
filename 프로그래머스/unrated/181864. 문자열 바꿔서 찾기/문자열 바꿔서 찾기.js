function solution(myString, pat) {
    
   return myString
       .replaceAll('A','C')
       .replaceAll('B','A')
       .replaceAll('C','B')
       .includes(pat)
       ==true?1:0;
    
}