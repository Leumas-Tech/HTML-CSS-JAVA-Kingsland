function main(x1,y1,x2,y2,inputX,inputY){
if(x1 < inputX < x2 && y1 < inputY < y2){
    console.log("Inside");
}
if(x1 > inputX > x2 && y1 > inputY > y2){
    console.log("Outside");
}
if(x1 === inputX || x2 === inputX || y1 === inputY || y2 === inputY){
    console.log("Border");
    }
}

main(2,-3,12,3,8,-1);