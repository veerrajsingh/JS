const accountId = 12345
let accountEmail = "veer@goggle.com"
var accountPassword = 6969
accountCity = "Jaipur"
let accountState
// Assignment to constant variable => Not Allowed!!
// accountId = 2
accountEmail = "raj@gmail.com"
accountPassword = 1212
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])