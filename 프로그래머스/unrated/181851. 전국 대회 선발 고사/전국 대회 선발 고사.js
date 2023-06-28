function solution(rank, attendance) {
    let arr = [];
    let result = [];
    let sum = [];
    for(let i = 0; i<rank.length; i++){
        if(attendance[i]==true){
            arr.push(rank[i]);
        }
    }
    result= arr.sort((a,b)=>a-b).slice(0,3);
    sum = result.map((value)=> rank.indexOf(value));
    return sum[0]*10000+sum[1]*100+sum[2]
        
}
    