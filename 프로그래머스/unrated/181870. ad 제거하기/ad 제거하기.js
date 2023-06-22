function solution(strArr) {
  const arr=[];
    for(let i=0; i<strArr.length; i++){
        if(!strArr[i].includes('ad')){ //include 문자열에 값이 포함되거나 안될경우 true,false
            arr.push(strArr[i]);
        }
    }
    return arr;
}