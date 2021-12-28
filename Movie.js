var mymovies = [];
class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        this.setPG();
    }
    
    setPG(){
        var obj = {};
        obj.title = this.title;
        obj.studio = this.studio;
        obj.rating = this.rating == "" ? "PG" : this.rating ;
        mymovies.push(obj);  
    }

    getPG(movieName){
       let result = mymovies.filter(result => ( result.title.toLowerCase() === movieName.toLowerCase() && result.rating === "PG"));
       return result;
    }
}
let objInstOne = new Movie("Casino Royale","Eon Productions","PG­13");
let objInstTwo = new Movie("Mersal","Sun pictures","PG");
console.log(objInstOne.getPG("Casino Royale"))
console.log(objInstTwo.getPG("Mersal"))