function solution(a, b, c) {
    let point = 0;
    if(a==b&&a==c&&b==c){
       point=(a + b + c) * (a*a + b*b + c*c ) * ((a*a*a) + (b*b*b) + (c*c*c) )
    }else if(a==b||a==c||b==c){
        point=(a + b + c) * (a*a + b*b + c*c )
    }else{
        point=a+b+c
    }
    return point;
}