function run() {
    const input = document.getElementById("input").value;
    const inputSec = document.getElementById("input2").value; // only for question 3
    const output = document.getElementById("output");
    let out = "";
    let arr = [];
    for(let i = 0; i < inputSec; i++){
        arr.push(input[i]);
    }
    out = arr;

    output.innerText = out;
}