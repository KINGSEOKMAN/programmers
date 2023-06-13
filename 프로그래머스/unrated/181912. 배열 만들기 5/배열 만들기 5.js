function solution(intStrs, k, s, l) {
     const arr=[];
    for(i=0; i<intStrs.length; i++){
        arr.push(intStrs[i].substr(s,l));
    }
    const intArr = arr.map(strNum => parseInt(strNum))
    const result = intArr.filter(num=> num>k);
    
    return result;
  
}