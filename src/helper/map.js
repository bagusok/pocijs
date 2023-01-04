export default (array, callback) => {
    const result = new Array(array.length);
    for(let index = 0;index < array.length;index++){
        result[index] = callback(array[index]);
    }
    return result;
}