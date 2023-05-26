////////////////////////////////
// Easy Going
////////////////////////////////

// for (let i = 0; i < 20; i++) {
//     console.log(i+1);
// }

////////////////////////////////
// Get Even
////////////////////////////////

// for (let i = 0; i < 200; i++) {
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////

// for (let i = 0; i <= 100; i++) {
//     if(i % 3 === 0){
//         if(i % 5 === 0) {
//             console.log("FizzBuzz");
//         }
//         else{
//             console.log("Fizz");
//         }
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else console.log(i);
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// wolfy.pop();
// wolfy.push("Gotham City")
// plantee[2] += 1;
// dart.push("Hawkins")
// wolfy.shift();
// wolfy.unshift("Gameboy")

// console.log(wolfy);
// console.log(plantee);
// console.log(dart)

////////////////////////////////
// Yell at the Ninja Turtules
////////////////////////////////

// let turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

// for(i of turtles) {
//     console.log(i.toUpperCase());
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

for(i in favMovies) {
    if (favMovies[i] === 'Titanic') {
        console.log(i);
    }
}

favMovies.sort();
favMovies.pop();
favMovies.push('Guardians of the Galaxy');
favMovies.reverse();
favMovies.shift();
favMovies.unshift(); // returns 18

for(c in favMovies) {
    if (favMovies[c] === 'Django Unchained') {
        favMovies.splice(c, 0, 'Avatar');
        break;
    }
}

let halfmovies = Math.floor(favMovies.length / 2); // added Math.floor to ensure median index is a whole number

console.log(halfmovies); //just checking that the median index is found and a whole number

let newFavMovies = favMovies.slice(halfmovies, favMovies.length); // step 12

console.log(newFavMovies); // step 12

console.log(favMovies)

for (x in favMovies) {
    if (favMovies[x] === 'Fast and Furious') {
        console.log(x);
    }
}
