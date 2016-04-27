// Great example concerning call stacks and recursion (function blows the stack)

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??

