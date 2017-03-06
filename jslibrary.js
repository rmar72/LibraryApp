
//=============Book Class=============//
function Book(oData) {
	this.title= oData.title,
	this.author= oData.author,
	this.numPages= oData.pages,
	this.publishDate= oData.publishDate
}
// Instances of Book Class
var book1 = new Book({title:"Eloquent JS", author: "Marijn Haverbeke", pages:270, publishDate:"03/20/2000"});
var book2 = new Book({title:"JS The Good Parts", author: "Douglas Crockford", pages:300, publishDate:"07/25/2002"});
var book3 = new Book({title:"Learning JS", author: "Ethan Brown", pages:245, publishDate:"01/15/1999"});
var book4 = new Book({title:"JS for Dummies", author: "Emily Vander", pages:458, publishDate:"10/28/2001"});
var book5 = new Book({title:"JS The Weird Parts", author: "John Doe", pages:345, publishDate:"10/26/2009"});
var book6 = new Book({title:"JS The Weird Parts 2", author: "John Doe", pages:300, publishDate:"10/26/2011"});


//===========Library Class==========//
var Lib = function(name, city, state){
	this.libName = name,
	this.city =	city,
	this.state = state
};

//Instance of Library Class
var jsLib = new Lib("JS303", "Denver", "CO"); 

Lib.prototype.bookArr = [];

Lib.prototype.addBook = function(newBook){

};

Lib.prototype.removeBookByTitle = function(str){

};

Lib.prototype.removeBookByAuthor = function(authorName){

};

Lib.prototype.getRandomBook = function(){
	
};


Lib.prototype.getBookByTitle = function(title){

};

Lib.prototype.getBooksByAuthor = function(authorName){

};

Lib.prototype.addBooks = function(){
	
};

Lib.prototype.getAuthors = function(){
	
};

Lib.prototype.getRandomAuthors = function(){
	
};