function main(n,list){
    let div2=0;
    let div3=0;
    let div4=0;

    for(let i=0; i<n;i++){
        let item = list[i];
        if(currentNum %2 ===0){
            div2++;
        }
        if(currentNum %3 ===0){
            div3++;
        }
        if(currentNum %4 ===0){
            div4++;
        }
    }
let percent2 = div2/n*100;
let percent3 = div3/n*100;
let percent4 = div4/n*100;

console.log();
console.log();
console.log();
}
main(3,[3,3,6,9]);