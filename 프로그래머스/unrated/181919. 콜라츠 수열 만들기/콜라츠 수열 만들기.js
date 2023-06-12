function solution(n) {
    let x = n;
    let arr = [n];
    while(x!=1){
        if(x%2==0){
            arr.push(x/2);
            x=x/2;
        }else if(x%2==1){
            arr.push((3*x)+1)
            x=(3*x)+1
        }
    }
    
  return arr;
}