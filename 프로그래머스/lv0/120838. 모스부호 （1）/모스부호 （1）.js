 const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
function solution(letter) {
    let answer = "";
    const currentMorse = letter.split(' ')
    for(let i = 0; i< currentMorse.length; i++){
      answer += morse[currentMorse[i]]
    }
    
    return answer;
}