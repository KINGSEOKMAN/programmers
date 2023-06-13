function solution(my_string, is_suffix) {
    const arr = [];
    const result = [];
    for(i=0; i<my_string.length; i++){
        
       arr.push(my_string.substr(i));
    }
    if(arr.filter(str=>str==is_suffix).length===0){
        return 0;
    }else return 1;
 
 
}