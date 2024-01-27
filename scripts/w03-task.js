/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    var add1Value = parseFloat(document.getElementById("add1").value);
    var add2Value = parseFloat(document.getElementById("add2").value);
    document.getElementById("sum").value = add(add1Value, add2Value);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);



/* Function Expression - Subtract Numbers */

var subtract = function(number1, number2) {
    return number1 - number2;
};

var subtractNumbers = function() {
    var subtract1Value = parseFloat(document.getElementById("subtract1").value);
    var subtract2Value = parseFloat(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(subtract1Value, subtract2Value);
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

var multiply = (number1, number2) => number1 * number2;

var multiplyNumbers = () => {
    var factor1Value = parseFloat(document.getElementById("factor1").value);
    var factor2Value = parseFloat(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(factor1Value, factor2Value);
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);




/* Open Function Use - Divide Numbers */


function divide(number1, number2) {
    return number1 / number2;
}

var divideNumbers = function() {
    var dividendValue = parseFloat(document.getElementById("dividend").value);
    var divisorValue = parseFloat(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(dividendValue, divisorValue);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);



/* Decision Structure */

document.getElementById("getTotal").addEventListener("click", function() {
    var subtotalValue = parseFloat(document.getElementById("subtotal").value);
    var isMember = document.getElementById("member").checked;

    if (isMember) {
        subtotalValue *= 0.8; // Apply a 20% discount for members
    }

    var totalDue = subtotalValue.toFixed(2);
    document.getElementById("total").textContent = "$ " + totalDue;
});






/* ARRAY METHODS - Functional Programming */

var numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);


/* Output Source Array */
document.getElementById("array").textContent = numbersArray;



/* Output Odds Only Array */

var oddNumbers = numbersArray.filter(num => num % 2 === 1);
document.getElementById("odds").textContent = oddNumbers;

/* Output Evens Only Array */

var evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.getElementById("evens").textContent = evenNumbers;



/* Output Sum of Org. Array */

var sumOfArray = numbersArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;



/* Output Multiplied by 2 Array */

var multipliedArray = numbersArray.map(num => num * 2);
document.getElementById("multiplied").textContent = multipliedArray;


/* Output Sum of Multiplied by 2 Array */

var sumOfMultipliedArray = multipliedArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultipliedArray;