function getEmployee(name){
        this.name = name;
        this.getName = function(){
            return this.name;
        };
    }
    // getEmployee.prototype.getName = function(){
    //     return this.name;
    // }