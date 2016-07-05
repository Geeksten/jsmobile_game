//the or boolean operation
// will evaluate to SomeUncommonWordName or {} which return SomeUncommonWordName
//if there is no SomeUncommonWordName we will have undefined or {} which return {}

var SomeUncommonWordName = SomeUncommonWordName || {};

SomeUncommonWordName.sayHello = function() {
	console.log('my hello');
};