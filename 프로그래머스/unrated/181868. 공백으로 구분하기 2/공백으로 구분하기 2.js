function solution(my_string) {

  let arr = my_string.split(" ");   
    let result = arr.filter((item)=>{ 
        if(item!=""){
            return item; 
        }
    })
    return result;
}
