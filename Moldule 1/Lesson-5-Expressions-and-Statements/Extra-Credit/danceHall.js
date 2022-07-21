function main (length, width,area){
    var size = ((length * 100)*(width * 100));
    var wardrobe = ((area*100)*(area*100));
    var bench = (size / 10);
    var freeSpace = size - wardrobe - bench;
    var dancers = freeSpace/(7040);
    console.log(dancers.toFixed(0));
}
main(50,25,2);
main(40,32,1);
