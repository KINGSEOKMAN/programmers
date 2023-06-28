function solution(rank, attendance) {
    let arr=[];
    let sum = 0 ;
    for(let i = 0; i<rank.length; i++){
        if(attendance[i]==true){
            arr.push(i);
        }
        
    }
    return arr;
}
    