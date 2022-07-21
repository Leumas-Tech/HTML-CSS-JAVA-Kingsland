function danceHall() {
    var length = prompt("Please enter appropriate side length");
while  (length < 10 || length > 100){
    prompt("invalid length. Between 10 and 100 units plz");
}

var width = prompt("Please enter appropriate side width");
while (width < 10 || width > 100) {
    prompt("invalid width. Between 10 and 100 units plz");
} 

var area = prompt("Please enter an appropriate area of wardrobe in meters");
while (area < 2 || area > 20) {
    prompt("invalid area. Between 2 and 20 meters plz");
}
 
console.log((((length * 100) * (width * 100) - (area * area)) -  ((length * 100) * (width * 100) / 10))/(40+7000));

} 