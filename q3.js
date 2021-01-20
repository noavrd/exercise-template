function run(arr, n) {
    
    let sec = [];
    if (n === null) {
        return arr[0];
    } else if (arr.length === 0 || n < 0) {
        return [];
    } else {
        for (let i = 0; i < n; i++) {
            if(arr[i] === undefined) {
                 return sec;
        } 
        sec.push(arr[i]);
    }

        return sec;
    }
    
}

