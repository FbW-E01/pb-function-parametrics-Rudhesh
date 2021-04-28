// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofer = who => {

  if (who !== 0) {
    who = "you";
  }
  return `Two for me and one for ${who}`;
};

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"
