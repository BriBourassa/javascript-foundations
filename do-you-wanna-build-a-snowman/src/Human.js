var Snowman = require('./Snowman');

class Human {
    constructor(name){
        this.name = name;
        this.wantsToBuildASnowman = true;
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        }
    }
    gatherMaterials(item, num){
        this.materials[item] += num
    }
    buildASnowman(){
        return new Snowman(this.materials)
    }
};

module.exports = Human;