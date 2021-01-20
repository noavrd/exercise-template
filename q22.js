function run(arr, sec) {

    for (let i = 0; i < sec.length; i++) {
        if ( !arr.includes(sec[i]) ) {
            arr.push( sec[i] );
        }
    }
    return arr;
}
run(arr, sec);