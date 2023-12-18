// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
function generateHashtag(str) {
    if (Boolean(str.trim()) !== true) {
        return false
    } else if (str.replace(/\s/g, '').length > 139) {
        return false
    }   else {return ("#" + str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}).replace(/\s/g, ''))}

}
console.log(generateHashtag(''))
console.log(generateHashtag(' '))
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("Do We have A Hashtag".repeat(10)))
