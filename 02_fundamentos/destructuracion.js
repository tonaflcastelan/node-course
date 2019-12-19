let flash = {
    name: 'Wally',
    last_name: 'West',
    power: 'super speed',
    getName: function() {
        return `${this.name} ${this.last_name} - poder ${this.power}`
    }
};
// console.log(flash.getName());

// let name = flash.name;
// let last_name = flash.last_name;
// let power = flash.power;

let { name, last_name, power } = flash;
console.log(name, last_name, power);