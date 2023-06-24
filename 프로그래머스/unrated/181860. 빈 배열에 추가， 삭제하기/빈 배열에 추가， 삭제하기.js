function solution(arr, flag) {
    const x=[];
    for(let i = 0; i< flag.length; i++){ 
        if(flag[i]==true){
            for(let j = 0; j<arr[i]*2; j++){
                x.push(arr[i]);
            }
        }else if(flag[i]==false){
            for(let y = 0; y<arr[i]; y++){
                x.pop()
            }
        }
    }
    return x;
}