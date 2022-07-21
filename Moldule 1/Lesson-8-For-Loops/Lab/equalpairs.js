function main(n, list) {
    let lastsum =0;
    let maxDifference =0;
    for(let i=0; i<n*2; i+=2){
        let pairsum = list[i]+list[i+1];
        if(i==0){
            lastsum= pairsum;
        }else{
            if(pairsum != lastsum){
                maxDifference= Math.abs
                (pairsum-lastsum);
            }
        }
        lastsum = pairsum;
    }
    if(maxDifference!=0){
        console.log(`no, maxdiff=${maxDifference}`);
    }
    else{
        console.log(`Yes, value=${lastsum}`);
    }
}

main(2,[-1,0,0,-1]);
main(2,[-5,6,3,-7]);