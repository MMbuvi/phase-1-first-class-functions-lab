const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(array){
    return array.slice(0, 2);
}

function returnLastTwoDrivers(array){
    return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];


let createFareMultiplier = function(fare){
    return function(ride){
        return fare * ride
    }
}

const fareDoubler = createFareMultiplier (2);
const fareTripler = createFareMultiplier (3);

let selectDifferentDrivers = function (array , rate){
    return rate(array)
   
}

