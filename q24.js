function run(arr) {
    return arr.filter(Boolean);
}

run([NaN, 0, 15, false, -22, '',undefined, 47, null])