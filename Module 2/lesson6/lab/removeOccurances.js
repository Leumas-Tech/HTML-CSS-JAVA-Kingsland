function main(remove, str){



while(str.indexOf(remove) != -1){
   str = str.replaceAll(remove, '');

}

    console.log(str);
}

main( 'ice' , 'kicegiciceeb');
main('abc' , 'tabctqw');