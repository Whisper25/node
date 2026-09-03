import cowsay from "cowsay";
import figlet from "figlet";
// import Article from "./Article.mjs";
import grade from "./grade.mjs";
// import { mult } from "./math.mjs";
console.log(grade(12));

console.log(cowsay.say({ text: "muu" }));

figlet
  .text("Other")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
figlet
  .text("Figlet")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
async function doStuff() {
  const text = await figlet.text(grade(2));
  console.log(text);
}

doStuff();
