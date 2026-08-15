let age = 0;

while (age <= 24) {
  if (age > 18) {
    break;
  }
  console.log("break", age);
  age++;
}

let num = 0;
while (num <= 24) {
  if (num > 18) {
    continue;
  }
  console.log("continue", num);
  num++;
}
