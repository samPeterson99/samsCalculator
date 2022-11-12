const display = document.querySelector('.display');
display.classList.add('.display')
        const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        const ops = ['a', 's', 'd', 'm']
const entries = []

const buttons = document.querySelectorAll('button');
buttons.forEach((buttons) => {
    buttons.addEventListener ('click', () =>{
        console.log(buttons.id)
        if (!isNaN(buttons.id)) {
            display.innerHTML += buttons.id;  
        } else if (ops.includes(buttons.id)) {
            entries.push(display.innerHTML);
            entries.push(buttons.id);
            console.log(entries.length)
            display.innerHTML = '';    
        } else if (buttons.id == "clear") {
            display.innerHTML = '';
            entries.length = 0;
        } else if (buttons.id == "back") {
            display.innerHTML.slice(display.innerHTML.lastIndexOf);
        } else if (buttons.id == ".") {
            display.innerHTML.match('.') ? 
            display.innerHTML = "OOPS" : 
            display.innerHTML += buttons.id;
        } else if (buttons.id == "equals") {
            entries.push(display.innerHTML)
            
        }
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
        display.innerHTML = ''
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
        display.innerHTML = answer
        console.log(answer)
}

