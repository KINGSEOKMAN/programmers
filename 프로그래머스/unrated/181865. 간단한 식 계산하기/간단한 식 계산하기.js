function solution(binomial) {
    let arr= binomial.split(' ');
    let psI1=parseInt(arr[0]);
    let psI2=parseInt(arr[2]);
    if(arr[1]==='+') return psI1+psI2;
    else if(arr[1]==='-') return psI1-psI2;
    else return psI1*psI2;;

    
    
}