let ucFirst = function (str) {
    alert(`Cuvantul initial: ${str}
Cuvantul schimbat cu prima litera mare: ${str[0].toUpperCase() + str.slice(1)}`);
}

ucFirst(prompt('Introduceti cuvantul cu litere mici'));