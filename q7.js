function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let x = [];
    x.push(input);
     out = x.sort();

    output.innerText = out;
}