// Display
let display = document.getElementById("result");

// Numbers
let numbers = document.querySelectorAll(".number");

numbers.forEach(function(button){
    button.addEventListener("click", function(){
        display.value += button.textContent;
    });
});

function isOperator(char){
    return char === "+" || char === "-" || char === "*" || char === "/";
}

function hasOperator(value){
    return value.includes("+") ||
            value.includes("-") ||
            value.includes("*") ||
            value.includes("/");
}
// Operators
let operator = "";
let firstNumber = "";

// Addition
document.getElementById("add").addEventListener("click", function(){
    
    let lastChar = display.value.slice(-1);

    if(isOperator(lastChar)) return;


    operator = "+";
    firstNumber = display.value;
    display.value += "+";
});

// Subtraction
document.getElementById("subtract").addEventListener("click", function(){

    let lastChar = display.value.slice(-1);

    if(isOperator(lastChar)) return;

    operator = "-";
    firstNumber = display.value;
    display.value += "-";
});

// Multiplication
document.getElementById("multiply").addEventListener("click", function(){

    let lastChar = display.value.slice(-1);

    if(isOperator(lastChar)) return;

    operator = "*";
    firstNumber = display.value;
    display.value += "*";
});

// Division
document.getElementById("divide").addEventListener("click", function(){

    let lastChar = display.value.slice(-1);

    if(isOperator(lastChar)) return;

    operator = "/";
    firstNumber = display.value;
    display.value += "/";
});


// Answer button
document.getElementById("answer").addEventListener("click", function(){

    if(display.value === "") return;

    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }

});


// Delete button
document.querySelector(".delete").addEventListener("click", function(){
    display.value = display.value.slice(0, -1);
});

document.querySelector(".clear").addEventListener("click", function(){
    display.value = "";
    operator ="";
    firstNumber = "";
})

let toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        toggleButton.textContent = "☀️";
    }else{
        toggleButton.textContent = "🌙";
    }

});