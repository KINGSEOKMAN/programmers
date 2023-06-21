function solution(strArr) {
   const newArr=strArr.map((item,index)=>{
       if(index%2==1){
           return item.toUpperCase();
       }else{
           return item.toLowerCase();
       }
   })
   return newArr;
}