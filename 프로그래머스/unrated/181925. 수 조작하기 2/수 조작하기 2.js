function solution(numLog) {
    let str="";
     for(i=1; i<numLog.length; i++){
         if(numLog[i]-numLog[i-1]==1){
             str+='w';
         }else if(numLog[i]-numLog[i-1]==-1){
             str+="s";
         }else if(numLog[i]-numLog[i-1]==10){
             str+="d";
         }else{
             str+="a";
         }
     }
    return str;
}