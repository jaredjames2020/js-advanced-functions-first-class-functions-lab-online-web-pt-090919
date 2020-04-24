// Code your solution in this file!
 const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
};

const returnLastTwoDrivers = function(array) {
    return array.slice(2,4);
};

const selectingDrivers = function(array) {
    return (returnFirstTwoDrivers(array), returnLastTwoDrivers(array));
};