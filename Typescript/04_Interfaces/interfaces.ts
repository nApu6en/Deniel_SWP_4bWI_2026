interface Person {
    firstname: string;
    lastname: string;
    age: number;
    isMale?: boolean;

}


const person: Person = {
    firstname: "Deni",
    lastname: "Ivan",
    age: 69,

}


function printName(perso: Person) {
    console.log(person.isMale);

}

printName(person);