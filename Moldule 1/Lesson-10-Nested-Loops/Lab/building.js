function main(floors,estates){
  

    for(let floor = floors; floor > 0;   floor--){  
          let output = '';
      for(let room = 0; room<estates; room++){
        if(floor==floors){
            output+= `L${floor}${room} `;
        } else if(floor % 2 ===0){
            output+= `O${floor}${room} `;
        } else{
            output+= `A${floor}${room} `;  
        }
      }
      console.log(output);

    }
}
main(6,4);
