let display = document.getElementById('display');
function clickFunc(clickVal) {
    display.value += clickVal;
}
function sum() {
    display.value = eval(document.getElementById('display').value);
}
function sqrt() {
    display.value = Math.sqrt(document.getElementById('display').value);
}
function reset() {
    display.value = "";
}
function point() {
    if (display.value == "") {
        display.value = 0 + ".";
    }
    else {
        display.value += ".";
    }
}