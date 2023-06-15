function solution(n, slicer, num_list) {
    
        const [a,b,c]=slicer
        const arr=[];
        
        if(n==1){
            return num_list.slice(0,b+1)
        }else if(n==2){
            return num_list.slice(a)
        }else if(n==3){
            return num_list.slice(a,b+1)
        }else{
            for(let i=a; i<=b; i+=c){
                 arr.push(num_list[i]);
            }
           return arr
        
        }
        
 
    
    
}