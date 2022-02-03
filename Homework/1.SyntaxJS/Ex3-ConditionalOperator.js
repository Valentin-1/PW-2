a = prompt('Introduceti primul numar');
b = prompt('Introduceti al doilea numar');
c = prompt('Introduceti al treilea numar');

result = (a>b && a>c) ? (b>a && b>c) ? alert('Numarul maxim din sirul introdus este: ' +a) : alert('Numarul maxim din sirul introdus este: ' +b) : alert('Numarul maxim din sirul introdus este: ' +c);


