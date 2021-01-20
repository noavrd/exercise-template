function run(year1, year2) {

    let leap;
    for (let i = year1; i <= year2; i++) {
        if (i%4 === 0 && i%100 !== 0) {
            console.log(i);
        } else if (i%4 ===0 && i%100 === 0 && i%400 ===0) {
            console.log(i);
        }
    }
}

run(1988, 2020);