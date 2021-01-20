function run() {
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

}