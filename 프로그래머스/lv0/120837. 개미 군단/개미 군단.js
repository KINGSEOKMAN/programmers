function solution(hp) {
    let count = 0 ;
    const arr = [5,3,1];
    for( let i = 0; i<arr.length; i++){
        if(hp>=arr[i]){
            count += Math.floor(hp/arr[i])
            hp -= Math.floor(hp/arr[i])*arr[i];
        }
    }
    return count;
}