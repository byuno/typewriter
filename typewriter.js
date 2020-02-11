const sentence = "hello there from lighthouse labs";

const endOfSentence = sentence.length;

// setTimeout(() => {
// process.stdout.write('\n');
// }, 0)

for (let i = 0; i < sentence.length; i++) {

  setTimeout(() => {
    if (i === (sentence.length - 1)) {
      process.stdout.write('\n');
    } else {
      process.stdout.write(sentence.charAt(i));
    }
  }, 50 * i)
}







  //console.log('this is where the for loop ends')


 // <= 1s delay to make it noticeable. Can dial it down later.