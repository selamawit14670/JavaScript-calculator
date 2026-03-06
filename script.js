let display = document.getElementById("result");
let numbers = document.querySelectorAll(".number");
numbers.forEach(function(button){
    button.addEventListener("click", function(){
        display.value += button.textContent;
    })
})

var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");

add.addEventListener("click", function(){
    display.value += "+";
});

subtract.addEventListener("click", function(){
    display.value += "-";
});

multiply.addEventListener("click", function(){
    display.value += "*";
});

divide.addEventListener("click", function(){
    display.value += "÷";
});

var answer = document.querySelector(".answer");
answer.addEventListener("click", function(){
    display.value = eval(display.value);
});

var del = document.querySelector(".delete");
del.addEventListener("click", function(){
    display.value = display.value.slice(0, -1);
});