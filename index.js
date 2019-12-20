var Greeter = (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        // console.log ( 'from show greeting function firstname:', this.firstName, '. lastname:', this.lastName, '.');
        var row2 = document.getElementById('R1C2');
        // console.log('row2', row2, 'document', document);
        row2.innerHTML = 'Hello this was made by: ' + this.firstName + ' ' + this.lastName + '.';
    };
    Greeter.prototype.resetGreeting = function () {
        // console.log ( 'from show greeting function firstname:', this.firstName, '. lastname:', this.lastName, '.');
        var row2 = document.getElementById('R1C2');
        //console.log('row2', row2, 'document', document);
        row2.innerHTML = 'R1C2';
    };
    return Greeter;
})();
var greeter = new Greeter('Chad', 'Nickel');
