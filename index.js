// Code your solution in this file!
 const firstTwoDrivers = function returnFirstTwoDrivers(array){
    return array.filter(function(driver, index){ return index < 2;});
  };