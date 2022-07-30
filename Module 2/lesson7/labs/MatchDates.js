function main(dates){
    
    let pattern =/\b(?<day>\d{2})([.\/-])(?<month>[A-Z][a-z]{2})(?<year>(\2)\d{4})\b/gm;

    let validdateArray =[];
    while((validdate = pattern.exec(dates)) !== null){
        let day = validdate.groups['day'];
        let month = validdate.groups['month'];
        let year = validdate.groups['year'];
 console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
   

}
main('13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016');
main('4/Jun/1994, 27-Apr-2000, 01.Oct.1977, 23/08/1973, 12/Sep-2016');
main('09/Mar-1994, 11/DEC/2010, 18/Aug/2016, 05-Jan-1990, 07/May/1920 16.Feb.2020');
