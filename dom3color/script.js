// color changing on multiple click on buttion = color change of the
// bution with the help off function calling
const btn = document.getElementById("button");
const randomcolor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};
console.log(randomcolor());
function changerandomcolor() {
  document.body.style.backgroundColor = randomcolor();
}
btn.addEventListener("click", changerandomcolor);
