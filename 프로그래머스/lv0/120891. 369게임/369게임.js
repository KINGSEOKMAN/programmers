function solution(order) {
    let count = 0; 
    const orderStr = order.toString();
    for (let i = 0; i < orderStr.length; i++) {
        const digit = parseInt(orderStr[i]); 
        if (digit === 3 || digit === 6 || digit === 9) {
            count += 1;
        }
    }

    return count;
}