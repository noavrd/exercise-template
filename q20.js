function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = [];
    arr.push(input);
    let dup = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < dup.length; j++) {
            if (arr[i] !== dup[j]){
                dup.push(arr[i]);
            }
        }
    }
     out = dup;

/**/
    output.innerText = out;
}