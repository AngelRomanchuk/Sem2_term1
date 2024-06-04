class Person {

    personName;
    personAge;
    personPhone;
    personEmail;

    setValues(n, a, p, e){
        this.personName = n;
        this.personAge = a;
        this.personPhone = p;
        this.personEmail = e;
    }

    getValues(){
        return "Name: " + this.personName + ", " + "Age: " + this.personAge + ", "  + "Phone: " 
        + this.personPhone + ", "  + "Email: " + this.personEmail
    }

    setEmail(e){
        this.personEmail = e;
    }
}
let person1 = new Person();
person1.setValues("Angelina", 20, 1234567890, "angelina@keyin.com");
console.log(person1.getValues());
person1.setEmail("ang.romanchuk@keyin.com");
console.log(person1.getValues());