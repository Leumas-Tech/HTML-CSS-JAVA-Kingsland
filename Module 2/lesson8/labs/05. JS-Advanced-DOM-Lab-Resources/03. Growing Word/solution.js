function growingWord() {
let text = document.getElementById("exercise").lastElementChild;
let regex = /\d+/;
let blueDiv = document.getElementById("blueDiv");
let greenDiv = document.getElementById("greenDiv");
let redDiv = document.getElementById("redDiv");
console.log(text.style.color);



if(text.style.color ===  ""){
text.style.color = "blue";
text.style.fontSize ="2px";
}
else if(text.style.color ===  "blue"){
  text.style.color = "green";
  let currentSize = text.style.fontSize.match(regex)[0];
  console.log("currentSize: "+currentSize);
  currentSize = Number(currentSize[0]);
  currentSize = currentSize[0];
  text.style.fontSize ="2px";
  }
  else if(text.style.color ===  "green"){
    text.style.color = "red";
    let currentSize = text.style.fontSize.match(regex)[0];
    console.log("currentSize: "+currentSize);
    currentSize = Number(currentSize[0]);
    currentSize = currentSize[0];
    text.style.fontSize ="2px";
    }
    else if(text.style.color ===  "red"){
      text.style.color = "blue";
      let currentSize = text.style.fontSize.match(regex)[0];
      console.log("currentSize: "+currentSize);
      currentSize = Number(currentSize[0]);
      currentSize = currentSize[0];
      text.style.fontSize ="2px";
      }

}