const display = document.querySelector('.display');
display.classList.add('.display')
const ops = ['add', 'sub', 'div', 'mult']
const entries = []

const buttons = document.querySelectorAll('button');
buttons.forEach((buttons) => {
    buttons.addEventListener ('click', () =>{
        if (!isNaN(buttons.id) && entries.length == 1) { //Overwrite number
            console.log('freshnumber')
            clearAll();
            display.innerHTML += buttons.id;  
        } else if (!isNaN(buttons.id)) {
            display.innerHTML += buttons.id; 
        } else if (ops.includes(buttons.id)) { //operator (can I make this work like iPhone calculator?)
            entries[0] = display.innerHTML;
            entries.push(`${buttons.id}`);
            console.log(entries.length)
            display.innerHTML = '';    
        } else if (buttons.id == "clear") { //clear
            clearAll()
        } else if (buttons.id == "back") { //backspace
            display.innerHTML = backspace()
        } else if (buttons.id == ".") { //decimal
            display.innerHTML.includes('.') ? display.innerHTML = "ERROR!! Too many decimals" : display.innerHTML += buttons.id;
        } else if (buttons.id == "equals") {// =
            entries.push(display.innerHTML)
            let newDisplay = operate(entries[0], entries[1], entries[2])
            clearAll()
            display.innerHTML = newDisplay
            entries.push(newDisplay)
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
    let quot
    b == 0 ? quot = 'DEATH' : quot = a / b;
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

function backspace() {
    let currentDisplay = display.innerHTML;
    display.innerHTML = currentDisplay.substring(0,currentDisplay.length -1);
}

function clearAll() {
    entries.length = 0
    display.innerHTML = ''
}