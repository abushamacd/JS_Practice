// string immutable -> not change

const subject = "Math ";
const book = "math";

console.log(subject.toLowerCase());
console.log(book.toUpperCase());
console.log(subject.trim() + "test");

const address = "Chuadanga";
console.log(address.slice(4, 9));
console.log(address.slice(4));

const friends = "Rahim, Karim, Jamil, Salma";
const friendsarr = friends.split(", ");
console.log(friendsarr);
console.log(friendsarr.includes("Rahim"));
console.log(friendsarr.join("- "));
