// This is a working Module that will ask the user for a website as input, then return the DNS info 
// + IP address for the information submitted by the user
//============================================================================


let Netmask = require('netmask').Netmask
const fs = require('fs')
let dns = require('dns');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Website URL?: ', siteURL => {
    let lookupSite = dns.lookup(siteURL, function (err, addresses, family) {
        console.log(`your DNS address is:  ${addresses}`),
        console.log(lookupSite);
        readline.close()

    // console.log(``)
})})
//============================================================================