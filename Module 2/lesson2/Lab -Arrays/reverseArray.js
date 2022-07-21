function main (elements){
for(let i = 0; i< elements.length/2;i++){
    let temp = elements[i];
    elements[i]=elements[elements.length-1-i];
    elements[elements.length-1-i] = temp;

}
console.log(elements.join(" "));
}

// function main(elements){
//     console.log(elements.reverse.join(" "));
// }
main(['a','b','c','d','e']);
main(['William bermudez is cool','def','geh','ijk','lmn']);