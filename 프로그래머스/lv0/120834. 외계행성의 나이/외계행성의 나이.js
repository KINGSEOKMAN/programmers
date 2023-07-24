function solution(age) {
  const ary =["a","b","c","d","e","f","g","h","i","j"]
  const a = age.toString();
    let answer = "";
    for(let i = 0; i<a.length; i++){
        answer+=ary[a[i]];
    }
    return answer;

}

