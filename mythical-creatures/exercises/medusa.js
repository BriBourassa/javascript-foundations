var Person = require('./person');
var Statue = require('./statue');


class Medusa{
    constructor(name){
        this.name = name
        this.statues = []
    }

    gazeAtVictim(newVictim){
        var newStatue = new Statue(newVictim.name)
        if(this.statues.length < 3){
            this.statues.push(newStatue);
        } else {
            var shift = this.statues.shift();
            this.statues.push(newStatue);
            var fixedPerson = new Person(shift.name)
            fixedPerson.mood = 'relieved'
            console.log(shift)
            return fixedPerson
        }
    }
};

module.exports = Medusa