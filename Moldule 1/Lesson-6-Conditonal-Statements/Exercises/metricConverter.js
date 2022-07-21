function metricConverter(num,unit1,unit2){

 

        //first we convert their input to meters, so its universal, then meters to their designated output

        if (unit1 == "m"){
          num = num * 1;
        //meters to meters
        }
        else if (unit1 == "mm"){
            num =  num / 1000; 
            //mm to meters
        }
        else if(unit1 == "cm"){
            num =  num / 100;
        //cm to meters 
        }
        else if(unit1 == "mi"){
            num =  num / 0.000621371192;
        //miles to meters
        }
        else if(unit1 == "inches" ){
            num =  num / 39.3700787;
        //inches to meters 
        }
    

        else if (unit1 == "km"){
            num =  num * 1000;
        //kilometers to meters
        }

        else if (unit1 == "ft"){
            num =  num / 3.2808399;
        //feet to meters
        }

        else if (unit1 == "yd"){
            num =  num / 1.0936133;
        //yards to meters
        }


        
           if (unit2 == "m"){
            num =  num * 1;
            //bc meters to meters is the same thing
            }
    
    
            else if (unit2 == "mm"){
                num =  num * 1000;
            //meter to mm
            }
    
    
            else if (unit2 == "cm"){
                num =  num * 100;
            //meters to cm
            }
    
    
            else if (unit2 == "mi"){
                num =  num * 0.000621371192;
            //meters to miles
            }
    
    
            else if (unit2 == "inches" ){
                num =  num * 39.3700787;
            //meters to inches
            }
    
    
            else if (unit2 == "km"){
                num =  num / 1000;
            //meters to kilometers
            }
    
            else if (unit2 == "ft"){
                num =  num * 3.2808399;
            //meters to feet
            }
    
            else if (unit2 == "yd"){
            num =  num * 1.0936133;
            //meters to yards
            }
            console.log(num.toFixed(10));
            }
 
 
      

    
metricConverter(12, "km", "ft");
metricConverter(150, "mi", "inches");
metricConverter(450, "yd", "km");
