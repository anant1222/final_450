function reverseArray(array1){
     let newArray = array1.reverse();
     return newArray
}
// console.log(reverseArray([12,15,44,55,15,421,784]))

function reverseIntoOtherArray(array){
   let newArray = []
   for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
   }
   return newArray
}

// console.log(reverseIntoOtherArray([12,15,44,55,15,421,784]))


function reverseIntoSameArray(array){
    let newArray = []
    for (var i = array.length - 1; i >= 0; i--) {
     newArray.push(array[i])
    }
    return newArray
 }
 
//  console.log(reverseIntoOtherArray([12,15,44,55,15,421,784]))


 function reverseArrayOtherWay(){
    let array = [1,2,3,4,5,6,7];
   for (let i = 1; i <= array.length/2; i++) {
      let start = array[i-1];
      let end = array[array.length-i]
      array[i-1] = end;
      array[array.length-i] = start
   }
   return array
 }


 console.log(reverseArrayOtherWay())