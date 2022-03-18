function sumDigPow(a, b) {
    let end = [];
    for (let i = a; i <= b; i++) {
        let summs = 0;
        let letters = String(i).split('');
        for (numb in letters) {
            summs += Number(letters[numb]) ** (Number(numb) + 1)
        }
        if (summs == i) {
            end.push(i)
        }
    }
    return end
}
console.log(sumDigPow(1, 100))