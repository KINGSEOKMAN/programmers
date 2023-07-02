function solution(order) {
    const americano = 4500;
    const latte = 5000;
    let sum = 0;
    for(let i = 0; i < order.length; i++){
        if(order[i].includes('americano')){
            sum += americano;
        }else if(order[i].includes('latte')){
            sum += latte;
        }else{
            sum += americano;
        }
    }
    return sum;
}