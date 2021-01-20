function run(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push("Element " + i + " "+ "=" + " " +arr[i]);
    }
    console.log(newArr);
    return newArr;
    
}
//I did the question without enter input. instead the function gets an array and adds: Element i =

run([13,12,11])