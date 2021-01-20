function run(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        for ( let j =0; j < arr[i].length; j++) {
            //console.log(" ", arr[i][j])
            newArr.push(" ")
            newArr.push(arr[i][j]); 
        }
        //console.log("row " + (i + 1));
        newArr.push("row " + (i + 1)); 
    }
    //console.log(newArr);
    return newArr;
}

run([[2, 5, 8, 1], [4, 3, 5],[8,5,7,9]]);