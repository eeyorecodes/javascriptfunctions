let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }

}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added.");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    var movieStr = "Printing all movies....";
    for (var i = 0; i < allMovies.length; i++) {
        movieStr += "\n" + allMovies[i].title + 
        ", rating of " + allMovies[i].rating + 
        ", havewatched: " + allMovies[i].haveWatched;
    }
    console.log(movieStr);
    console.log("You have " + allMovies.length + " movies in total.");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    var ratingStr = "Printing movie(s) that have a higher rating than " + rating;
    var matches = 0;
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            ratingStr += "\n" + allMovies[i].title + 
            " has a rating of " + allMovies[i].rating;
            matches++;
        }
    }
    console.log(ratingStr);
    console.log("In total, there are " + matches + " matches.");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
            console.log("Changing the status of the movie " + title + "....");
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);