
class Centaur{
    constructor(centaurFax){
        this.name = centaurFax.name;
        this.breed = centaurFax.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
        this.bowShots = 0;
        this.ran = 0;
    }
    shootBow(){
        this.bowShots++
        if(this.bowShots + this.ran > 2){
            this.cranky = true
            return 'NO!'
        } else if(this.layingDown === true){
            return 'NO!'
        } else {
            return 'Twang!!!'
        }
    };
    
    run(){
        this.ran++
        if(this.bowShots + this.ran > 2){
            this.cranky = true
            return 'NO!'
        } else if(this.layingDown === true){
            return 'NO!'
        }
        return 'Clop clop clop clop!!!'
    }
    sleep(){
        if(this.standing === true){
            return 'NO!'
        } else {
            this.cranky = false;
            this.bowShots = 0 
            this.ran = 0
            return 'ZZZZ'
        }
    }
    layDown(){
        this.standing = false;
        this.layingDown = true
    }
    standUp(){
        this.standing = true;
        this.layingDown = false
    }
    drinkPotion(){
        if(this.standing === true){
            this.cranky = false
    } else {
        return 'Not while I\'m laying down!'
    }
    }
};

module.exports = Centaur