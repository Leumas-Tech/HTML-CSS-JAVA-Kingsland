function CalcSpeed() {
    var distance = prompt("What is the distance you need to travel?");
    var time = prompt("How much time?");
    var speed = distane/time;
    console.log(speed);
}

function currencyConvert() {
    var dollars = prompt("How many USD would you like to convert?");
    var euro = .88;
    var converted = dollars/euro;
    console.log(converted);
}

function inchToCent() {
    var inchesIN = prompt("How many inches are you converting");
    var centimeters = 2.54;
    var inches = inchesIN * centimeters;
    console.log(inches);

}