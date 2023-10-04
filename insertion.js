function insertionSort(array) {
    for(let i =0; i < array.length; i++){
        let curr = array[i]
        for(let j = i-1; j > -1 && array[j] > curr; j--){
            array[j+1] = array[j]
        }
        array[j+1]=curr 
    }
    return array
}

module.exports = insertionSort;