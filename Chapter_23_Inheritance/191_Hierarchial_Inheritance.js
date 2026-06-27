class Father {
    constructor(name) {
        this.name = name;
    }
    propertyWill() {

        console.log(this.name + ' get 50% share');

    }
}

class Son1 extends Father {
    gotShare() {
        console.log('Son1 ' + this.name + ' got land share!');

    }
}
class Son2 extends Father {
    getShare() {
        console.log('Son2 ' + this.name + ' get house share!');

    }
}

let son1Obj = new Son1('Kartik');
let son2Obj = new Son2('Sunny')

son1Obj.propertyWill();
son2Obj.propertyWill();

son1Obj.gotShare();
son2Obj.getShare();