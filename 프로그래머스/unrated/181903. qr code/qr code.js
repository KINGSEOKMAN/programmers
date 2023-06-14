function solution(q, r, code) {
    let str=[];
    let arr=code.split('');
    
    for(i=0; i<arr.length; i++){
        if(i%q==r){
            str.push(arr[i]);
        }
    }
    return str.join('');
}