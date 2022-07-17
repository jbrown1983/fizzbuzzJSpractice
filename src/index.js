// Fizz Buzz
//Start with the number, and count upwards
//If any number is divisible by three, it is replacesd by the word
//fizz and any number divisible by five is by the word buzz
//Numbers divisible by 15 become fizz buzz

for (let i = 0; i < 101; i++) {
  if (i % 15 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
