function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    let count = 0;
    let arr = [];
    arr[count].push(input);
    count++;

    for (let i = 0; i < arr.length; i++) {
        out = "Element" + i + input;
    }

    output.innerText = out;
}