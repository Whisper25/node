import cowsay from 'cowsay';
import Article from "./Article.mjs";
import { mult } from "./math.mjs";
console.log(cowsay.say({text:'muu'}));

console.log('hi from node');
const num1 = 5;
const num2 = 8;

console.log(num1+num2);
console.log(mult(num1,num2));

const newArticle = new Article('content');
console.log(newArticle.render());
