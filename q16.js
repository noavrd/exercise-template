function run(year1, year2) {

    for (let i = year1; i <= year2; i++) {
        if (i%4 === 0 && i%100 !== 0) {
            return (i);
        } else if (i%4 ===0 && i%100 === 0 && i%400 ===0) {
            return (i);
        }
    }
}

run(year1, year2);