let styles = ['Джаз', 'Блюз'];
//1) Afisarea initiala
console.log(styles);

//2)Adaugarea elementului, 2 este pozitia
styles[2] = 'Рок-н-рол'
console.log(styles);

//3)Adugarea si inlacuirea 
styles.splice(1, 1, 'Классика');
console.log(styles);

//4)Stergerea unui element
styles.shift();
console.log(styles);

//5)Adaugarea elementelor la inceputul sirului
styles.unshift('Рэп', 'Регги');
console.log(styles);