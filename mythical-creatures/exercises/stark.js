const Direwolf = require("./direwolf");

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
    callDirewolf(direwolf, location){
        // change direwolf location to stark location
        // run direwolf.protect(stark)
        direwolf.home = this.location

        direwolf.protect(direwolf.name, home)
    }
};


module.exports = Stark