// this should be false, since there is only one true
const verifyValuesOne = [true, false, false, false];

//this should be true, because there is more than two true
const verifyValuesTwo = [true, true, true, false, false, false, true, false];

//function to verify if there is >=2 true bolean values, if so it will return true if not it will return false
function verifyBoleanValues(...data: boolean[]) {
 //filters through array to verify if there is boolean truth
 const verifyTrue = data.filter((el) => el === true).length;

 //if there is two or more true bolean, it will return true if not it will be false
 if (verifyTrue >= 2) {
  console.log("There is more than one:", true);
 } else {
  console.log("There is no more than one true:", false);
 }
}

//this is false
verifyBoleanValues(...verifyValuesOne);

//this is true
verifyBoleanValues(...verifyValuesTwo);

//this is true
verifyBoleanValues(true, true, false, false, false);

//this is false
verifyBoleanValues(true, false, false, false, false);
