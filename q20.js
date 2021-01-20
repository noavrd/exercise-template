function run(arr) {

    let str;
    let sec = [];
    let count = arr.length;     //the function will count the array length


    while (count > 0) {
        str = arr[0];
        arr.shift();
        if  (!arr.includes(str) ) { // check if the value is in the array again
            sec.push(str);
        } else {
            arr.push(str); //take the value to the end of the array
            count--;
        }
    }
    console.log(sec);
    return sec;
}
