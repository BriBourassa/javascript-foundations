
class Stark{
    constructor(starkStats){
        this.name = starkStats.name;
        this.location = starkStats.area || 'Winterfell';
        this.safe = false;
    }
    sayHouseWords(){
        if(this.safe === true){
            return 'The North Remembers'
        } 
        return 'Winter is Coming'
    }
};


module.exports = Stark