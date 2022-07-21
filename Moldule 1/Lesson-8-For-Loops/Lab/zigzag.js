function main(n,list){
    let div2=0;
    let div3=0;
    let div4=0;

    for(let i=0; i<n;i++){
        let item = list[i];
        if(item %2 ===0){
            div2++;
        }
        if(item %3 ===0){
            div3++;
        }
        if(item %4 ===0){
            div4++;
        }
    }
let percent2 = div2/n*100;
let percent3 = div3/n*100;
let percent4 = div4/n*100;

console.log(`${percent2.toFixed(2)}%`);
console.log(`${percent3.toFixed(2)}%`);
console.log(`${percent4.toFixed(2)}%`);
}

main(2,[10,-20]);
main(3,[10,20,5]);