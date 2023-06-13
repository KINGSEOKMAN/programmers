
function solution(intStrs, k, s, l) {
     const arr=[];
    for(i=0; i<intStrs.length; i++){
        arr.push(parseInt(intStrs[i].substr(s,l)));
    }
    const result = arr.filter(num=> num>k)
    return result;

}
