let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Sirul de numere initial', array);
array.splice(array.indexOf(5), 1, 0, 0, 0);
console.log('Sirul cu numerele adaugate ',array);