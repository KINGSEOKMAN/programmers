function solution(arr1, arr2) {
    if(arr1.length===arr2.length){
        let sum1 = arr1.reduce((a,b)=>{
            return a+b;
        })
        let sum2 = arr2.reduce((a,b)=>{
            return a+b;
        })
        if(sum1>sum2) return 1;
        else if(sum1<sum2) return -1;
        else return 0;
    }else if(arr1.length>arr2.length){
        return 1
    }else if(arr1.length<arr2.length) {
        return -1
    }else{
        return 0;
    }
    
}