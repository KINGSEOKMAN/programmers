function solution(arr, flag) {
    const x=[];
    for(let i = 0; i< flag.length; i++){ 
        if(flag[i]){
        x.push(...Array(arr[i] * 2).fill(arr[i]));
        }else{
            for(let y = 0; y<arr[i]; y++){
                x.pop()
            }
        }
    }
    return x;
}