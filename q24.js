function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = [];
    let newAr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null && arr[i] !== 0 && arr[i] !== undefined && arr[i] !== NaN && arr[i]) {
            newAr.push(arr[i]);
        }
    }
    out = newAr;

    output.innerText = out;
}