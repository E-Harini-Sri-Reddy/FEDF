const Input1 = document.getElementById('input1');
const submit1 = document.getElementById('submit1');
const outputDiv1 = document.getElementById('outputDiv1');

submit1.addEventListener("click", () => {
    outputDiv1.innerHTML = customerType();
});

function customerType() {
    let customer = Number(Input1.value);
    if (customer > 0) {
        if (customer > 100) {
            return "<h2>A1.&nbsp;&nbsp;You are a Gold Customer</h2>";
        } else {
            return "<h2>A1.&nbsp;&nbsp;You are a Silver Customer</h2>";
        }
    } else {
        return "<h2>A1.&nbsp;&nbsp;Invalid Number of Points!</h2>";
    }
}

const Input2 = document.getElementById('input2');
const submit2 = document.getElementById('submit2');
const outputDiv2 = document.getElementById('outputDiv2');

submit2.addEventListener("click", () => {
    outputDiv2.innerHTML = role();
});

function role() {
    let role = Input2.value.toLowerCase();
    switch (role) {
        case 'admin':
        case 'administrator':
            return "<h2>A2.&nbsp;&nbsp;Welcome, Admin!</h2>";
        
        case 'guest':
            return "<h2>A2.&nbsp;&nbsp;Welcome, Guest!!</h2>";
        
        case 'dev':
        case 'developer':
            return "<h2>A2.&nbsp;&nbsp;Welcome, Dev!!!</h2>";
        
        default:
            return "<h2>A2.&nbsp;&nbsp;Invalid Role</h2>";
    }
}

const hello = document.getElementById('hello');
const outputDiv3 = document.getElementById('outputDiv3');

hello.addEventListener("click", hellos);

function hellos() {
    outputDiv3.innerHTML = "";

    outputDiv3.innerHTML += '<h2 style="font-weight:bold;">For Loop:</h2>';
    for (let i = 1; i <= 5; i++) {
        outputDiv3.innerHTML += "<h2>Hello World</h2>";
    }

    outputDiv3.innerHTML += '<br><h2 style="font-weight:bold;">While Loop:</h2>';
    let x = 5;
    while (x > 0) {
        outputDiv3.innerHTML += "<h2>Hello World</h2>";
        x--;
    }

    outputDiv3.innerHTML += '<br><h2 style="font-weight:bold;">Do-While Loop:</h2>';
    let y = 1;
    do {
        outputDiv3.innerHTML += "<h2>Hello World</h2>";
        y++;
    } while (y <= 5);
}

