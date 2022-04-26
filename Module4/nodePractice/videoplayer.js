//const twitterApiKey = "hascg1324FGRV234GR5xcce22F";
const stressfulAPI = "this is the second API key holder";
const unicornAPI = "this is the third API key holder UNICORN";

// default exports - THIS SYNTAX IS FOR A SINGLE EXPORT
const twitterApiKey = "hascg1324FGRV234GR5xcce22F";


// named exports - THIS SYNTAX IS FOR MULTIPLE EXPORTS
module.exports.twitterAPIKey = "this is the SECOND API key holder";
module.exports.unicornAPI = "this is the THIRD API key holder UNICORN";
module.exports.fireflyAPI = "this is the FOURTH API key holder FIREFLY";

exports.sayHello = function(name)
 {
     console.log(`hello, ${name}!`)
 }

console.log(module)