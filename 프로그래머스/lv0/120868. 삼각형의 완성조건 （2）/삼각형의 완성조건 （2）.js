function solution(sides) {
    let maxSide = Math.max(sides[0], sides[1]);
    let minSide = Math.min(sides[0], sides[1]);

    let possibleMinLength = maxSide - minSide + 1; 4
    let possibleMaxLength = maxSide + minSide - 1; 8

    return possibleMaxLength - possibleMinLength + 1;
}

