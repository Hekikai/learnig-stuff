const log = console.log;

function* pseudoRandom(number) {
  while (1) {
    yield (number = number * 2);
  }
}

const generator = pseudoRandom(1);
for (let i = 0; i < 10; i++) {
  log(generator.next().value);
}
