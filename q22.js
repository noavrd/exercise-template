function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = [];
    let arrNew = [];
    
    // search if the number is in the arrays, if not, the number will enter the new array
    for (let i = 0; i < arr.length;  i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== arrNew.includes()) {
                arrNew.push(arr[i][j]);
            }
        }
    }
    
    out = arrNew;
 
    output.innerText = out;
}