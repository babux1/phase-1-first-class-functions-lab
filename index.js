const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// function createFareMultiplier(int) {
//     return function(fare) {
//         return fare * fare * fare * fare
//     int = `${int}`
//     }

// }

const createFareMultiplier = function (multiplied) {
    return function (num) {
        return multiplied * num;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
};