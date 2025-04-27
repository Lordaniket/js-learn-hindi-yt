const accountId = 144553;
let accountEmail = "ps@gmail.com"
var accountPassword = "12345"
accountCity = "Gwalior" // This way is also possible but not preferred
let accountState; // When not assigned any value, by default value is 'undefined'
var pk;

// accountId = 2; // not allowed
accountEmail = "ps.ps@ps.com"
accountPassword = "2123112"
accountCity = "Blr"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState, pk]);

/*
Try to use 'let' more than 'var'
Prefer not to use 'var'
Beacause of issues in block scope and functional scope
*/
