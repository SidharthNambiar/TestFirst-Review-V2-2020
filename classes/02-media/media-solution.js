/* eslint-disable no-unused-vars */


class Media {
    constructor(title, yearOfRelease) {

        this.title = title;
        this.yearOfRelease = yearOfRelease;
        this.ratings = [];

    }

    getTitle() {
        return this.title;
    }

    getYearOfRelease() {
        return this.yearOfRelease;
    }

    getAverageRating() {

        if(this.ratings.length == 0){
            return `this is not rated`
        }
        let totalRating = this.ratings.reduce((total, rating) =>{
            total += rating;
            return total;
        }, 0);

        return totalRating/this.ratings.length

    }

    addRating(rating) {
        if (rating < 1 || rating > 100) {
            return `${rating} is not a valid rating, ratings must be 1-100`
        }
        else {
            this.ratings.push(rating);
        }

    }
}

class Album extends Media {

    constructor(title, yearOfRelease, artist, tracks){
        super(title, yearOfRelease);
        this.artist = artist;
        this.tracks = tracks;

    }
}

class Movie extends Media {

    constructor(title, yearOfRelease, director, runtime){

        super(title, yearOfRelease);

        this.director = director;
        this.runTime = runtime;

    }

}

class Book extends Media {

    constructor(title, yearOfRelease, author, pages){
        super(title, yearOfRelease);
        this.author = author;
        this.pages = pages;
    }
}