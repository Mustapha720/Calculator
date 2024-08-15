function showNumber(num) {
    if (document.getElementById('displayNumber').innerText == 0) {
    document.getElementById('displayNumber').innerText = num
    }
    else {
    document.getElementById('displayNumber').innerText += num
    }
}

function calculate() {
    let userCalculation = eval(document.getElementById('displayNumber').innerText)
    let calculation = eval (userCalculation);
    document.getElementById('displayNumber').innerText = calculation
}

function clearButton() {
    document.getElementById('displayNumber').innerText = "0"
}

function backSpace() {
    // document.getElementById('displayNumber').innerText = ""
    var display = document.getElementById('displayNumber').innerText;
    if (display.length > 1) {
            display = display.slice(0, -1);
            document.getElementById('displayNumber').innerText = display;
        }
        else {
            display = display.slice(0, -1);
            document.getElementById('displayNumber').innerText = "0";
        }
    }

function dark() {
    if (document.getElementById('darkMode').innerText == 'Dark Mode') {
        document.getElementById('darkMode').innerText = "Light Mode"
        document.body.style.color = 'white'
        document.body.style.backgroundColor = 'black'
    }
    else {
        document.getElementById('darkMode').innerText = "Dark Mode"
        document.body.style.color = 'black'
        document.body.style.backgroundColor = 'white'
    }
}