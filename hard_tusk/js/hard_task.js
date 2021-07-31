let num = 266219;

num += '';

let multiplication = 1;

for (let i = 0; i < num; i++) {
  if (num.charAt(i) >= 1) {
    multiplication *= num.charAt(i);
  } else {
    break;
  }
}

multiplication = multiplication ** 3;

multiplication += '';

let twoNumber = `${multiplication.charAt(0)}${multiplication.charAt(1)}`;

console.log(twoNumber);
