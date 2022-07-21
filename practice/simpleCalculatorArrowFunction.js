let calculate = (a,b,operator) =>{
    if(operator === 'multiply'){
        return a*b;
    } else if (operator === 'divide'){
        return a/b;
    } else if (operator === 'add'){
        return a +b;
    } else if (operator === 'subtract'){
        return a-b;
    }
};

console.log(calculate(5,10,'multiply'));

