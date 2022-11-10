

function add(a, b) {
    let sum = a + b
    return sum
}

function subtract(a, b) {
    let diff = a - b
    return diff
}

//pull from past calculator project to do mult and div in arrays

function multiply(a, b) {
    let prod = a * b
    return prod
}

function divide(a, b) {
    let quot = a / b
    return quot
}

function operate(a, b, x) {
        let answer = ''
        switch(a, b, x) {
            case x = 'a':
                answer = add(a, b);
                break;
            case x = 's':
                answer = subtract(a, b);
                break;
            case x = 'd':
                answer = divide(a, b);
                break;
            case x = 'm':
                answer = multiply(a, b);
        }
        return answer
}