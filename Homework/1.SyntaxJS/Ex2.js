a = prompt('Introduceti primul numar din interval');
b = prompt('Introduceti al doilea numar din interval');

let sum = 0;

for (let i = a; i <= b; ++i) {
    if (i % 2 == 0) {
        sum = i + sum;
    }
}

alert('Suma este = ' + sum);