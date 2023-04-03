function reverseNow(string) {
  return string.split("").reverse().join("");
}

const str = "I am Mow";
const now = reverseNow(str);
console.log(now);
