function main(word,template){
    let arr = template.split(" ");

    let words = word.split(", ");

    

    for(let i = 0; i < arr.length; i++){

        
        for(let j = 0; j < words.length; j++){
       if(arr[i].includes("*")){
                arr[i]=words[j];
    

        }      
        }
             
    }
    
     console.log(`${arr.join(" ")}`);


}
main('great',
'kingsland is ***** place for learning new programming languages');
main('great, learning',
'kingsland is ***** place for ******** new programming languages');

main('databases, servers, systems engineering, clients','A full stack developer is an engineer who can handle all the work of *********, *******, *******************, and *******.');