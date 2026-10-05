interface Person{
    firstname: string;
    lastname:string;
    age:number;
    isMale?:boolean;
}


const person: Person = {
    firstname:"hans",
    lastname:"Müller",
    age: 12
    
}

function printName(person: Person) {
    console.log(person.lastname);
}

printName(person);