function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let x =[];
    x.push(input);
    let arr = [];
    for (let i = 0; i < x.length; i++){
        if (x[i]%2 === 0 && x[i-1]) {
                    arr.push("-");
                }
        arr.push(x[i]);
    }
    out = arr;
    output.innerText = out;
}