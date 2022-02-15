const person1 = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: 'email@domain.com'
    },
    address: `Moldova`
}

const person2 = {
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: 'email@domain.com'
    },
    address: `Moldova`
}

const personFinal = new Object();
function Intersection(first, second, thirth) {
    for (const i in first) {
        for (const key in second) {
            if (i == key && first[i] == second[key]) {
                thirth[i] = first[i];

            }
        }
    }
}

Intersection(person1, person2, personFinal)

console.log(personFinal);