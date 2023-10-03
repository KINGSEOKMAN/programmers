function solution(polynomial) {
    let result = "";
    let coefficient = 0;
    let constant = 0;
    let firstTerm = true; // 첫 항을 처리하는지 여부를 나타내는 변수

    // '+'와 ' '를 제외한 모든 공백을 제거합니다.
    polynomial = polynomial.replace(/ /g, '');

    const terms = polynomial.split('+');

    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];

        if (term.includes('x')) {
            if (term === 'x') {
                coefficient += 1;
            } else {
                // 항에서 'x'의 위치를 찾아 계수를 추출합니다.
                const indexOfX = term.indexOf('x');
                if (indexOfX === 0) {
                    // 'x' 앞에 계수가 없으면 계수는 1입니다.
                    coefficient += 1;
                } else {
                    coefficient += parseInt(term.slice(0, indexOfX));
                }
            }
        } else {
            // 상수항인 경우 계수를 더합니다.
            constant += parseInt(term);
        }
    }

    if (coefficient !== 0) {
        // 계수가 0이 아니면 결과에 계수를 추가합니다.
        if (!firstTerm) {
            result += ' + ';
        }
        result += coefficient === 1 ? 'x' : coefficient + 'x';
        firstTerm = false;
    }

    if (constant !== 0) {
        // 상수항이 0이 아니면 결과에 상수항을 추가합니다.
        if (!firstTerm) {
            result += ' + ';
        }
        result += constant;
    }

    return result;
}


