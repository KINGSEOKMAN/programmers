function solution(myString) {
    let arr = myString.split("x");
       let result = arr.filter((item)=>{ 
        if(item!=""){
            return item; 
        }
    });
       return result.sort();
}