// this should be false, since there is only one true
var verifyValuesOne = [true, false, false, false];
//this should be true, because there is more than two true
var verifyValuesTwo = [true, true, true, false, false, false, true, false];
//function to verify if there is >=2 true bolean values, if so it will return true if not it will return false
function verifyBoleanValues() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    //filters through array to verify if there is boolean truth
    var verifyTrue = data.filter(function (el) { return el === true; }).length;
    //if there is two or more true bolean, it will return true if not it will be false
    if (verifyTrue >= 2) {
        console.log("There is more than one:", true);
    }
    else {
        console.log("There is no more than one true:", false);
    }
}
//this is false
verifyBoleanValues.apply(void 0, verifyValuesOne);
//this is true
verifyBoleanValues.apply(void 0, verifyValuesTwo);
//this is true
verifyBoleanValues(true, true, false, false, false);
//this is false
verifyBoleanValues(true, false, false, false, false);
