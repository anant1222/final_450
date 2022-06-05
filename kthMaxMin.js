function kthMaxMin (){
    let array  = [1,2,3,4,5,6,7,8,9,10,11]
    let position = 10;
    array = array.sort((a,b)=>{return a-b});
    let min = array[position];
    let max = array[array.length-position]
    console.log('min--------------',min)
    console.log('max--------------',max)
}
kthMaxMin()