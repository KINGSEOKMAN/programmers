function solution(str_list, ex) {
    let str='';
    for(let i = 0; i<str_list.length; i++){
        if(!str_list[i].includes(ex)){
            str+=str_list[i];
        }
    }
    return str;
}