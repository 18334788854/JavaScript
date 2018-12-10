function testable(isTestable) {
    return function (target) {
        target.isTestable = isTestable;
    }
}
@testable(true)
class MyTestable {
}
console.log(MyTestable.isTestable);//true
