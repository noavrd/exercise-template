function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let x = [];
    x.push(input);
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j <x.length; j++) {
            out = x[i][j];
        }
        out = console.log("row" + x[i]);
    }
        
        
        

    output.innerText = out;
}