let array = [8, 7, 2, 2,  3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

let arr = array;
arr.sort((item, index) => item - index);//sorteaza elementele dupa ordine crescatare
console.log(arr.filter((item, index) => arr.indexOf(item) === index));