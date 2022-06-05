function minMax (){
let array = [115,2,3,4,5,6,7,8,9];
let min = Infinity;
let max = -Infinity;
for (let i = 0; i < array.length; i++) {
    array[i] > max ? max=array[i]:-Infinity;
    array[i] < min ? min=array[i]:Infinity;
}
console.log('min-------------'+min)
console.log('max-------------'+max)
}

// minMax();


function maxMIn(){
    let array = [115,2,3,4,5,6,7,8,9];
    let min = Math.min.apply(null,array)
    let max = Math.max.apply(null,array)
    console.log(min)
    console.log(max)

}
maxMIn()