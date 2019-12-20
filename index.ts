

class Greeter {
    firstName:string;
    lastName:string;

    constructor(firstName: string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    showGreeting(){
       // console.log ( 'from show greeting function firstname:', this.firstName, '. lastname:', this.lastName, '.');
        var row2 = document.getElementById('R1C2');
       // console.log('row2', row2, 'document', document);
        row2.innerHTML = 'Hello this was made by: ' + this.firstName + ' ' + this.lastName + '.';
    }

    resetGreeting() {
       // console.log ( 'from show greeting function firstname:', this.firstName, '. lastname:', this.lastName, '.');
        var row2 = document.getElementById('R1C2');
        //console.log('row2', row2, 'document', document);
        row2.innerHTML = 'R1C2';
    }
}
    const greeter = new Greeter('Chad', 'Nickel');



