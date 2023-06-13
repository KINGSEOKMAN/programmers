function solution(my_string, queries) {
    my_string = my_string.split(""); //문자열을 reverse 함수를 쓸수 없기 때문에 배열로 바꿔준다.
    for(let i=0;i<queries.length;i++) { 
        const [s, e] = queries[i]; // queries 돌면서 s e 에 배열값을 넣는다 
        my_string=[...my_string.slice(0,s),
                  ...my_string.slice(s,e+1).reverse(),
                  ...my_string.slice(e+1)]
    }
    return my_string.join(""); //문자열로 다시 바꿔준다.
}

