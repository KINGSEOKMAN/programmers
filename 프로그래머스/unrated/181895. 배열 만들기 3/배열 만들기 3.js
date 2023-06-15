function solution(arr, intervals) {
    const[[a1,b1],[a2,b2]]=intervals
    const arr2=arr.slice(a1,b1+1)
    
    return arr2.concat(arr.slice(a2,b2+1))
    
}