// Задание 1 DONE

// const out = document.querySelector('.zvezda');
// let items = '';
// for(let x = 0; x < 3; x++){
// for (let i = 0; i < 3; i++){
//     items += '*'
// }
// items += '_'
// }
// out.innerHTML += `${items}`;

  // Задание 2 DONE

//   let result = "";

//   for (let i = 1; i <= 3; i++) {
//     result += i + "<br>"; 
//     for (let j = 1; j <= 3; j++) {
//       result += "*_"; 
//     }
//     result += "<br>";
//   }
//   document.querySelector(".out").innerHTML = result;


//Задание 3 DONE

// const out = document.querySelector('.zvezda');
// let items = '';
// for(let x = 0; x < 5; x++){
// for (let i = 0; i < 3; i++){
//     items += '*_'
// }
// items += '<br>'
// }
// out.innerHTML += `${items}`;


// Задание 4

function t1() {
    let out = '';
  for( let i = 1; i <= 16; i++){
      out += i + '_'
  }
  document.querySelector('.out-1').textContent = out;
  };
  document.querySelector('.b-1').addEventListener('click', t1);
  
  
  // Задание 5 ???????????
  
  // function t2() {
  //   let out = '';
  //   for (let i = 2; i <= 38; i += 2) {
  //       out += i + '_';
  //   }
  //   document.querySelector('.out-2').textContent = out;
  // }
  // document.querySelector('.b-2').addEventListener('click', t2);
      
  // // Задание 7
  
  // function t3() {
  //   let out = '';
  //   for (let i = 25; i >= 7; i--) {
  //     if (i > 7) {
  //       out += i + '_';
  //     } else {
  //       out += i;
  //     }
  //   }
  //   document.querySelector('.out-3').textContent = out;
  // }
  // document.querySelector('.b-3').addEventListener('click', t3);