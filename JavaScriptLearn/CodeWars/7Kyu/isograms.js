function isIsogram(str){
    return str.toLowerCase().split("").length == new Set(str.toLowerCase().split("")).size
  }

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram("aba"))
console.log(isIsogram('moOse'))