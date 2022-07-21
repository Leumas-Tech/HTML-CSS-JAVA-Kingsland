function main(n) {
for(let row = 1; row<= n; row++){
    let result = "";
for(let col = 0; col < row; col++){
        result+= " *";
    }
    console.log(result);
    }  
}
main(7);
