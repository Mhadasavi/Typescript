var genericsDemo = /** @class */ (function () {
    function genericsDemo() {
        this.data = [];
    }
    genericsDemo.prototype.add = function (item) {
        this.data.push(item);
    };
    genericsDemo.prototype.remove = function () {
        this.data.shift();
    };
    return genericsDemo;
}());
var obj = new genericsDemo();
obj.add("add");
var obj2 = new genericsDemo();
obj2.add(2);
