function run(x) {
    let num1 = x.toString();
    let arr = [num1[0]];
    for (let i = 0; i < num1.length; i++){
        if (num1[i]%2 === 0 && num1[i-1]%2 === 0) {
            arr.push("-",num1[i]);
        } else {
            arr.push(num1[i]);
        }
    }
    console.log(arr.join(''));
}
run(05485665)