function main(aray){
    class Cat {
        constructor(name, age) {
          this.name = name;
          this.age = Number(age);
          this.meow = () => {
            console.log(`${this.name}, age ${this.age} says Meow`);
        };         
        }
    }
let catz = [];
//
for(let catNameAge of aray){
    //we take the original array and break it up into mini arrays
    let [name, age] = catNameAge.split(' ');
    catz.push(new Cat(name, age));
}

//
for(let cat of catz){
cat.meow();
}
        
}


main(['Mellow 2', 'Tom 5']);