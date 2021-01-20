function run(items, n) {
    
    for (let i = 0; i < n; i++) {
        if ( i === (n - 1) ){
            return items[i-1];
        }
    }
}

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
run(items,n);