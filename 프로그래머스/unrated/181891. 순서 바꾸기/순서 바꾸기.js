function solution(num_list, n) {
    const arr=num_list.slice(n)
    const arr2=num_list.slice(0,n)
    return arr.concat(arr2);
}