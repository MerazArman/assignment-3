//                                               feetToMile  er assignment

function feetToMile (feet){
    var mile = feet/5280 ;
    return mile ;
}
var convertFeetToMile = feetToMile();
console.log(convertFeetToMile)

//                                     ====================1m  ta end ===============


// woodcalculator er coded ======


function woodcalculator (chare,table,khat){
    var chareQbFeet = chare*1 ;
    var tableQbFeet = table*3 ;
    var khatQbFeet = khat*5;
    var totalQbikFeet = chareQbFeet+tableQbFeet+khatQbFeet;
    return totalQbikFeet;
}
var chareTableKhatTotalFeet = woodcalculator(10,20,4);
console.log(chareTableKhatTotalFeet);

// end=====================

// brickcalculator==========


/* function brickcalculator (tala){
    var fastTenFlour = tala*1000;
    var secendTenFlour = tala*12;
    var thirdTenFlour = tala*10;   
    if (tala<=10){
        console.log(tala*15)
      else if   
    }
}
console.log(brickcalculator(10));*/



// tinyFriend  er code 

function  tinyFriend (chackSmallName){
    var minName = chackSmallName[0];
    for(var i = 0; i < chackSmallName.length; i++){
        var result = chackSmallName[i];
        if (result < minName){
            minName = result
            
        }
    }
    return minName ;
}
    var chackresult = tinyFriend([]);
    console.log(chackresult);