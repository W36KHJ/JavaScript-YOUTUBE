let num = [5, 8, 2, 9, 3]
num.sort()/*colocar em ordem*/
num.push(1)/*acrescenta um numero*/
console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor esta na posição ${pos}`)
}
