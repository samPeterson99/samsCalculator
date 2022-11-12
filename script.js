const display = document.querySelector('.display');
display.classList.add('.display')
const ops = ['add', 'sub', 'div', 'mult']
const entries = []

const buttons = document.querySelectorAll('button');
buttons.forEach((buttons) => {
    buttons.addEventListener ('click', () =>{
        if (!isNaN(buttons.id)) {
            display.innerHTML += buttons.id;  
        } else if (ops.includes(buttons.id)) {
            entries.push(display.innerHTML);
            entries.push(`${buttons.id}`);
            display.innerHTML = '';    
        } else if (buttons.id == "clear") {
            display.innerHTML = '';
            entries.length = 0;
        } else if (buttons.id == "back") {
            display.innerHTML = clearDisplay()
        } else if (buttons.id == ".") {
            display.innerHTML.includes('.') ? display.innerHTML = "ERROR!! Too many decimals" : display.innerHTML += buttons.id;
        } else if (buttons.id == "equals") {
            entries.push(display.innerHTML)
            let newDisplay = operate(entries[0], entries[1], entries[2])
            display.innerHTML = clearDisplay()
            display.innerHTML = newDisplay
            entries.length = 0
        }
    })
})


//make button log to display, one at a Time
//make buttons stack unless function hit 


function add(a, b) {
    let sum = parseInt(a) + parseInt(b)
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
function operate(x, func, y) {
    let answer = ''
    display.innerHTML = ''
    console.log(typeof func)
    if (func === 'add') {
        answer = add(x, y)
    } else if (func === 'sub') {
        answer = subtract(x, y)
    } else if (func === 'div') {
        answer = divide(x, y)
    } else if (func === 'mult') {
        answer = multiply(x, y)
    }
        return answer
}

function clearDisplay() {
    let currentDisplay = display.innerHTML;
    display.innerHTML = currentDisplay.substring(0,currentDisplay.length -1);
}