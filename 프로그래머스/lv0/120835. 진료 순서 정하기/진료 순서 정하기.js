function solution(emergency) {
    const sorted = emergency.slice().sort((a, b) => b - a); // 원본 배열을 변경하지 않기 위해 복사한 배열을 정렬
    const arr = [];


    for (let i = 0; i < emergency.length; i++) {
        const index = sorted.indexOf(emergency[i]);
        arr.push(index+1);
    }

    return arr;
}
