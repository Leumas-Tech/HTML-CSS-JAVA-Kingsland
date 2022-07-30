function main(string){
    let arr = string.split("\\");
  


    let newArr= arr[3].split(".");
  

    console.log(`File name: ${newArr[0]}`);
    console.log(`File extension: ${newArr[newArr.length-1]}`);

    

}
main('C:\\Internal\\training-internal\\Template.pptx');
main('C:\\Projects\\Data-Structures\\LinkedList.cs');

