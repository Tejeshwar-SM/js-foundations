const marvelheroes = ["thor", "ironman", "spiderman"];
const dcheroes = ["superman","flash","batman"];

// marvelheroes.push(dcheroes);
// console.log(marvelheroes[3][1]);

const allHeroes = marvelheroes.concat(dcheroes);
// console.log(allHeroes);
//concat returns a new array

const all_new_Heroes = [...marvelheroes,...dcheroes];
// console.log(all_new_Heroes);
//more used than concat as it allows addition of more arrays.

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const usable_anotherArray = anotherArray.flat(Infinity);
// console.log(usable_anotherArray);

// console.log(Array.isArray("tejeshwar"));
// console.log(Array.from("tejeshwar"));
// console.log(Array.from({name: "hitman"})); //interesting case for interviews

let score1 = 100;
let score2 = 101;
let score3 = 102;
console.log(Array.of(score1,score2,score3));


