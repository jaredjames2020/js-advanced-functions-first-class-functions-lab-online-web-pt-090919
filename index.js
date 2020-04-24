// Code your solution in this file!
 const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
};

const returnLastTwoDrivers = function(array) {
    return array.slice(2,4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(number) {
    return function(fare) {
        return fare * number;
    };
};

const fareDouble = createFareMultiplier(fare);

const fareTripler = createFareMultiplier(fare);