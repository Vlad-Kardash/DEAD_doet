// // Каков самый большой делитель числа 600851475143, являющийся простым числом?
const func = (a) => {
  buffer = [];
  buffer2 = [];
  for (let i = a; i > 1; i--) {
    if (a % i == 0) {
      buffer.push(i);
    }
  }
  //   console.log(buffer);
  for (let j = 0; j < buffer.length - 1; j++) {
    if (
      buffer[j] % 2 !== 0 &&
      buffer[j] % 3 !== 0 &&
      buffer[j] % 5 !== 0 &&
      buffer[j] % 7 !== 0
    ) {
      buffer2.push(buffer[j]);
    }
  }
  console.log(Math.max(...buffer2));
};

func(6851475143);
