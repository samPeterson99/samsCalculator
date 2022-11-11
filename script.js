const display = document.querySelector('.display');
display.classList.add('.display')
const entries = []

const buttons = document.querySelectorAll('button');
buttons.forEach((buttons) => {

    buttons.addEventListener ('click', () =>{
        entries.push(buttons.id)
        let headsUp = entries[entries.length -1]
        console.log(headsUp)
        display.textContent = `${headsUp}`
    })
})


//make button log to display, one at a Time
//make buttons stack unless function hit 


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

//probably want a to pass operate in reduce, so I'm populating to an array
//answer would become array[0] unless there is a clear
function operate(a, func, b) {
        let answer = ''
        switch(a, func, b) {
            case func = 'a':
                answer = add(a, b);
                break;
            case func = 's':
                answer = subtract(a, b);
                break;
            case func = 'd':
                answer = divide(a, b);
                break;
            case func = 'm':
                answer = multiply(a, b);
        }
        return answer
}

