function cost(mins) {
    var summa = 30
    if (mins < 60) {
        return summa
    }
    mins -= 60
    if (mins - Math.floor(mins / 30) * 30 < 5) {
        summa += Math.floor(mins / 30) * 10
    } else {
        summa += (1 + Math.floor(mins / 30)) * 10
    }
    return summa;
}

function test(answer, rigth) {
    return answer === rigth
}


console.log(test(cost(45), 30));
console.log(test(cost(63), 30));
console.log(test(cost(84), 40));
console.log(test(cost(102), 50));
console.log(test(cost(273), 100));