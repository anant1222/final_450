function sortArrayConsist(array = null) {
    if (!array) { var array = [0, 2, 1, 2, 0, 1, 2, 0, 1, 1, 2, 1, 2, 0]; }
    let count0 = 0;
    let count1 = 0;
    let count2 = array.length - 1

    while (count1 <= count2) {
        if (array[count1] == 0) {
            let temp = array[count1];
            array[count1] = array[count0]
            array[count0] = temp;
            count0++;
            count1++;
        } else if (array[count1] == 1) {
            count1++;
        } else if (array[count1] == 2) {
            let temp = array[count1];
            array[count1] = array[count2]
            array[count2] = temp;
            count2--;
        }
        // console.log(array)
    }

    return array
}

console.log(sortArrayConsist())