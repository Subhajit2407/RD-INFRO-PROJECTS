let currentInput = "";
let operator = "";
let previousInput = "";
let display = document.getElementById("current");

// Update Display Function
function updateDisplay() {
    display.innerText = currentInput || "0";
}

// Number & Operator Handling
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (!currentInput) return;
    if (operator) calculateResult();
    previousInput = currentInput;
    operator = op;
    currentInput = "";
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    operator = "";
    previousInput = "";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    if (!operator || !previousInput || !currentInput) return;
    let result = eval(previousInput + operator + currentInput);
    currentInput = result.toString().slice(0, 12);
    operator = "";
    previousInput = "";
    updateDisplay();
}

// Scientific Functions
function square() {
    currentInput = (parseFloat(currentInput) ** 2).toString();
    updateDisplay();
}

function cube() {
    currentInput = (parseFloat(currentInput) ** 3).toString();
    updateDisplay();
}

function sqrt() {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
}

function log() {
    currentInput = Math.log10(parseFloat(currentInput)).toString();
    updateDisplay();
}

function ln() {
    currentInput = Math.log(parseFloat(currentInput)).toString();
    updateDisplay();
}

function exp() {
    currentInput = Math.exp(parseFloat(currentInput)).toString();
    updateDisplay();
}

function factorial() {
    let num = parseInt(currentInput);
    let fact = 1;
    for (let i = 2; i <= num; i++) fact *= i;
    currentInput = fact.toString();
    updateDisplay();
}

function usePi() {
    currentInput = Math.PI.toString();
    updateDisplay();
}

function useE() {
    currentInput = Math.E.toString();
    updateDisplay();
}

// 🚀 Light/Dark Mode Toggle with Local Storage
const themeToggle = document.getElementById("themeToggle");

// Function to Apply Theme
function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.checked = true;
    } else {
        document.body.classList.remove("light-mode");
        themeToggle.checked = false;
    }
}

// Load Theme from Local Storage
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

// Theme Toggle Event
themeToggle.addEventListener("change", function () {
    const newTheme = themeToggle.checked ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});
ś