function solution(num_list) {
    let result;
    if(num_list.length<=10){
        result=num_list.reduce((item,value)=> item * value);
    }else{
        result=num_list.reduce((item,value)=> item + value);
    }
    return result;
    
}