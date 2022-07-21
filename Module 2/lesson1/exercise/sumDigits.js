
function main(n){
    let numArr = n.toString().split("");

    let sum = numArr.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);
    
    console.log(sum);
}

main(245678);