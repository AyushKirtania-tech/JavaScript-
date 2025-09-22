const account_Id = 145624
let account_email = "rahikirtania@gmail.com"
var password = "12345"
accountCity = "Kolkata"
let account_State;

// account_Id = 3 // not allowed

account_email = "qbasic@yahoo.com"
password = "09876"
accountCity = "Bengal"

// console.log(account_Id);
/*
prefer not to use var
because of issue in block scopeand functional scope
*/
 
console.table([account_Id,account_email,password,accountCity,account_State])
