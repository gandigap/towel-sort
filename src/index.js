
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newArray = [];

  if (arguments.length) {
    let num = matrix.length;
    let array;

    for (let i = 0; i < matrix.length; i++) {
      array = matrix[i];
      if (i % 2 === 0) {
        for (let k = 0; k < array.length; k++) {
          newArray.push(array[k])
          console.log(array[k]);
        }
      } else {
        for (let k = 1; k <= array.length; k++) {
          newArray.push(array[array.length - k])
          console.log(array[array.length - k]);
        }
      }
    }
    return newArray;
  } else {
    return newArray;
  }


}
