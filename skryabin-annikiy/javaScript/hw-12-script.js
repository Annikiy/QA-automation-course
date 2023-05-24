//1.
console.log('Task 1')
let i;
let j;
let str = '';
for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    str += '*';
  }
  str += '_';
}
console.log(str); // ***_***_***_
console.log('-------------------');


//2.
console.log('-------------------\n\nTask 2\n-------------------');
str = '';
for(i = 1; i < 4; i++){

    str += `${i}\n`;

    for(j = 0; j < 3; j++){

        str += '*_';
    }

    str += '\n';
}
console.log(str); // good
console.log('-------------------');


//3.
console.log('-------------------\n\nTask 3\n-------------------');
str = '';

for (i = 0; i < 3; i++){

    for(j = 0; j < 3; j++){

        str += '*_';
    }

    str += '\n';
}
console.log(str); // good
console.log('-------------------');