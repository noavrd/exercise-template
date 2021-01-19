function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = [];
    for (let i = 0; i < arr.length; i++) {
        arr.push(input);
        out = "Elemem" + i + input;
    }

    output.innerText = out;
}