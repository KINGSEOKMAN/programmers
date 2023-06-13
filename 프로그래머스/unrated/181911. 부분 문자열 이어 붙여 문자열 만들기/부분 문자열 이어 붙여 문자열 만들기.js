function solution(my_strings, parts) {
    let str="";
   for(i=0; i<parts.length; i++){
       let [a,b]=parts[i];
       for(j=a; j<=b; j++){
           str+= my_strings[i][j];
       }
       
   }
    return str;
}