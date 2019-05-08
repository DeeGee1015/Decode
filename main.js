function encode(word) {
let result = [];
for(let position in word){
result.push(word.charCodeAt(position));
}
return result.join(':');
}

function decode(hash) {
let arr = hash.split(':');
let result = [];
for(let code of arr){
result.push(String.fromCharCode(code));
}
return result.join('');
}

let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);

console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);

Ashley Almonte


Reply to conversation with Thanks for sharingThanks for sharing

Reply to conversation with I'm not sureI'm n
