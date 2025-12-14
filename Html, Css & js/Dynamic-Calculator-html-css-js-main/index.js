// Loan EMI Calculator
function calculateLoan() {
    const P = Number(document.getElementById('loanP').value);
    const R = Number(document.getElementById('loanR').value) / 12 / 100;
    const N = Number(document.getElementById('loanN').value) * 12;
    if (!P || !R || !N) {
        document.getElementById('loanResult').textContent = 'Please enter all values.';
        return;
    }
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    document.getElementById('loanResult').textContent = 'EMI: ₹' + emi.toFixed(2);
}

// Interest Calculator
function calculateInterest() {
    const P = Number(document.getElementById('intP').value);
    const R = Number(document.getElementById('intR').value);
    const T = Number(document.getElementById('intT').value);
    const type = document.getElementById('intType').value;
    if (!P || !R || !T) {
        document.getElementById('intResult').textContent = 'Please enter all values.';
        return;
    }
    let result = 0;
    if (type === 'simple') {
        result = P * R * T / 100;
        document.getElementById('intResult').textContent = 'Simple Interest: ' + result.toFixed(2);
    } else {
        result = P * (Math.pow(1 + R / 100, T) - 1);
        document.getElementById('intResult').textContent = 'Compound Interest: ' + result.toFixed(2);
    }
}

// Age Calculator
function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('ageResult').textContent = 'Please select your date of birth.';
        return;
    }
    const birth = new Date(dob);
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    document.getElementById('ageResult').textContent = `You are ${years} years, ${months} months, ${days} days old.`;
}

// Unit Converter
function convertUnit() {
    const value = Number(document.getElementById('unitValue').value);
    const from = document.getElementById('unitFrom').value;
    const to = document.getElementById('unitTo').value;
    if (!value) {
        document.getElementById('unitResult').textContent = 'Please enter a value.';
        return;
    }
    // Conversion factors to meters
    const toMeters = {
        m: 1,
        km: 1000,
        cm: 0.01,
        mi: 1609.34
    };
    const meters = value * toMeters[from];
    const result = meters / toMeters[to];
    document.getElementById('unitResult').textContent = `${value} ${from} = ${result.toFixed(4)} ${to}`;
}

// Tax Calculator
function calculateTax() {
    const amount = Number(document.getElementById('taxAmount').value);
    const rate = Number(document.getElementById('taxRate').value);
    if (!amount || !rate) {
        document.getElementById('taxResult').textContent = 'Please enter amount and rate.';
        return;
    }
    const tax = amount * rate / 100;
    const total = amount + tax;
    document.getElementById('taxResult').textContent = `Tax: ₹${tax.toFixed(2)}, Total: ₹${total.toFixed(2)}`;
}
function range(){
    const rangevalue = document.querySelector('#range').value;
    const para = document.querySelector('.para');
    if (para) para.textContent = `${rangevalue}`;
    // Also update the visible range-value inside bmi UI if present
    const rangeValueEl = document.querySelector('.range-value .para');
    if (rangeValueEl) rangeValueEl.textContent = rangevalue;
}
function appendToDisplay1(input) {
    document.querySelector(".screen1").textContent += input; 
}

function allclear1() {
    document.querySelector(".screen1").textContent = ''; 
}

function deleteLast() {
    const screen = document.querySelector(".screen1");
    screen.textContent = screen.textContent.slice(0, -1);
}
function calculate(){
    let text = document.querySelector(".screen1").textContent;
    document.querySelector(".screen1").textContent = `${eval(text).toFixed(4)}`;
}
function appendtoDisplay(input){
    document.querySelector(".screen").textContent += input; 
}

function allclear(){
        document.querySelector(".screen").textContent = ''; 

}
function work(){
    let text = document.querySelector(".screen").textContent;
    document.querySelector(".screen").textContent = `${eval(text)}`;
}
function use(){
    const Value = document.getElementById("calcType").value;
    
    // Hide all calculators first
    document.querySelectorAll('.calculator').forEach(calc => {
        calc.style.display = 'none';
    });
    
    // Show only the selected calculator
    document.querySelector(`.${Value}`).style.display = 'block';
}
function add() {
    const counter = document.querySelector(".weightcount");
    counter.textContent = Number(counter.textContent) + 1;
}

function minus() {
    const counter = document.querySelector(".weightcount");
    counter.textContent = Number(counter.textContent) - 1;
}
function add1() {
    const counter = document.querySelector(".agecount");
    counter.textContent = Number(counter.textContent) + 1;
}

function minus1() {
    const counter = document.querySelector(".agecount");
    counter.textContent = Number(counter.textContent) - 1;
}
function calculateBMI(){
    const hCm = Number(document.querySelector('#range').value || 0);
    const weight = Number(document.querySelector('.weightcount').textContent || 0);
    if (!hCm || !weight) {
        document.querySelector('.bmi-result').textContent = 'Please set height and weight.';
        document.querySelector('.bmi-category').textContent = '';
        return;
    }
    const hM = hCm / 100;
    const bmi = weight / (hM * hM);
    const rounded = Math.round(bmi * 10) / 10;
    document.querySelector('.bmi-result').textContent = `BMI: ${rounded}`;
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obesity';
    document.querySelector('.bmi-category').textContent = category;
}
// Run once on load so the basic calculator is visible by default
document.addEventListener('DOMContentLoaded', use);
document.addEventListener('DOMContentLoaded', range);
