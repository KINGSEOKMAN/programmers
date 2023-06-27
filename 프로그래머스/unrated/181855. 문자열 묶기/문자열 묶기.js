function solution(strArr) {
  const obj = {};

    for (let i = 0; i<strArr.length; i++){
        const length = strArr[i].length;
        if(obj[length])
            obj[length]++;
        else{
            obj[length]=1;
        }
    }
    const values = Object.values(obj);
    return Math.max(...values);
}