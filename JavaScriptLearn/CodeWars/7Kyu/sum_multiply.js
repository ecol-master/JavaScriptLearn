var sumAndMultiply = function(sum, multiply) {
    // write your code here
    let d = sum ** 2 - 4 * 1 * multiply
    if (d == 0){
        let y = d ** 0.5 / 2
        let x = sum - y
        return [x, y].sort((a, b) => a - b)
    }else{
        let y1 = (d ** 0.5 + sum **2) / 2
        let y2 = (sum ** 2 - d ** 0.5) / 2
        if (y1 % 1 == 0 && 1 <= y1 <= 1000){
            let x = sum - y1
            return [x, y1].sort((a, b) => a - b)
        }else if (y2 % 1 == 0 && 1 <= y2 <= 1000){
            let x = sum - y2
            return [x, y2].sort((a, b) => a - b)
        }else{
            return null
        }
    }
}

console.log(sumAndMultiply(13, 12));
console.log(sumAndMultiply(6, 9) == [3, 3]);
console.log(sumAndMultiply(200, 8452) == null);
console.log(sumAndMultiply(15, 56) == [7, 8])