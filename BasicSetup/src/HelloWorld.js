var Main = /** @class */ (function () {
    function Main() {
    }
    Main.printName = function () {
        console.log(Main.applicationName);
    };
    Main.applicationName = 'Hello World';
    return Main;
}());
Main.printName();
