function main(array){
let town = new Object ();

for(let i = 0; i < array.length; i++){
 let place = array[i];
    let placeHolder = place.split(" | ");
    town.name = placeHolder[0];
    town.latitude = parseFloat(placeHolder[1]);
    town.longitude = parseFloat(placeHolder[2]);
    console.log(` { town: '${town.name}', latitude: '${town.latitude.toFixed(2)}', longitude: '${town.longitude.toFixed(2)}' }`);
}

}
main(['Atlanta | 33.753746 | -84.386330','Beijing | 39.913818 | 116.363625']);

