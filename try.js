let startTime = performance.now();
let counter = 0;
for (let i = 0; i < 10000000; i++) {
  counter++;
}
let endTime = performance.now()
console.log(`It took ${endTime - startTime} milliseconds`)