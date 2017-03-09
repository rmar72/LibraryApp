
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
	var isDecide = true;
	if(typeof newBook !== "object"){
		throw "Not a valid entry.";
	}	
		
	for(var i=0; i < this.bookArr.length; i++){
		if(this.bookArr[i].title == newBook.title){
			isDecide = false;
		}
	}	
	return isDecide ? (this.bookArr.push(newBook), true) : false;
}

Lib.prototype.removeBookByTitle = function(str){
	var isDecide = false;
	if(typeof str !== "string"){
		throw "Not a valid entry.";
	}
	
	for(var i=0; i < this.bookArr.length; i++){
		if(this.bookArr[i].title == str){
			this.bookArr.splice(i,1);
			isDecide = true; 
		}	
	}
	return isDecide ? true : false;
}

Lib.prototype.removeBookByAuthor = function(authorName){
	var isDecide = false;
	if( typeof authorName !== "string" ){
		throw "Not a valid entry.";
	}	
	
	for(var i=0; i < this.bookArr.length; i++){
		if(this.bookArr[i].author == authorName){
			this.bookArr.splice(i,1);
			isDecide = true;
			i--; //makes up for the missing index that was removed
		}	
	}
	return isDecide ? true : false;
}

Lib.prototype.getRandomBook = function(){
	return this.bookArr.length <=0 ? null : this.bookArr[ Math.floor(Math.random()*this.bookArr.length) ];
}

Lib.prototype.getBookByTitle = function(title){
	var regex1 = new RegExp(title, 'gi'), aTitles = [];
	
	if(typeof title !== "string"){
		throw "Not a valid entry.";
	}

	for(var i=0; i < this.bookArr.length; i++){
		if(this.bookArr[i].title.match(regex1)){
			aTitles.push( this.bookArr[i] );
		}
	}	
	return aTitles;
}

Lib.prototype.getBooksByAuthor = function(authorName){
	var regex1 = new RegExp(authorName, 'gi'), aAuthors = [];
		
	if(typeof authorName !== "string"){
		throw "Not a valid entry.";
	}
	
	for(var i=0; i < this.bookArr.length; i++){
		if( this.bookArr[i].author.match(regex1) ){
			aAuthors.push( this.bookArr[i] );	
		}
	}
	return aAuthors;
}

Lib.prototype.addBooks = function(books){
	var oldLength = this.bookArr.length;
	for(var i=0; i < books.length; i++){
		this.addBook(books[i]);
	}
	return this.bookArr.length - oldLength;
}

Lib.prototype.getAuthors = function(){
	var aAuthors = [];
	
	for(var i=0; i < this.bookArr.length; i++){
		var oBookAuthor = this.bookArr[i].author;
		if(aAuthors.indexOf(oBookAuthor) <= -1){
			aAuthors.push(oBookAuthor);
		}
	}	
	return aAuthors;
}

Lib.prototype.getRandomAuthors = function(){
	return this.bookArr.length <= 0 ? null : this.bookArr[ Math.floor(Math.random()*this.bookArr.length) ].author;
}