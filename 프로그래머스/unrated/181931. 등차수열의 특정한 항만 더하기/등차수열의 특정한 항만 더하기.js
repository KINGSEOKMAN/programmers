function solution(a, d, included) {
     let included2=[];
        included2[0]=a;
    let sum=0;
    for(i=1; i<included.length; i++){
       included2[i]=included2[i-1]+d;
    }
    for(i=0; i<included.length; i++){
        if(included[i]==1){
            sum+=included2[i]
        }
        
    }
    return sum;
}