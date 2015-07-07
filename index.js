// For this questionnaire I chose to use a singly linked list because it is a powerful data structure for traversing through lists. 

// This is an object constructor for creating a singly linked list
function List() {
	 List.makeNode = function() { 
	  return {data: null, next: null}; 
	 }; 
	 
	 this.start = null; 
	 this.end = null; 

//This function is used to add a new node/integer to the list
	 this.add = function(data) { 
	  if (this.start === null) { 
	   this.start = List.makeNode(); 
	   this.end = this.start; 
	  } else { 
	   this.end.next = List.makeNode(); 
	   this.end = this.end.next; 
	  }  
	  this.end.data = data; 
	 }; 
	 
//This function returns the first element's value in the list and changes the first element to the next consecutive element, if needed it is possible to get any random element using javascript's random function, in that case I would also add a delete method to the constructor to delete the element from its position after retrieval
	  this.get_id = function(){
	    var ret = this.start.data;
	    var current = this.start;
	    this.start = current.next;
	    return ret;
	  };

//This function adds the value to the end of the list  
	  this.free_id =function(i) {
	     var temp = List.makeNode();
	//      temp.next = this.end; 
	     this.end.next = temp; 
	     temp.data = i; 
	  };

//This function returns the item at the particular index position of the list	  
	  this.item = function(i) { 
	   var current = this.start; 
	   while (current !== null) { 
	    i--; 
	    if (i === 0) return current; 
	    current = current.next; 
	   } 
	   return null; 
	  }; 

//This function traverses the list applying the given function to each element  
	 this.each = function(f) {
	  var current = this.start;
	  // no protect is used to not check for an infinite loop
	  //noprotect
	  while (current !== null) { 
	   f(current); 
	   current = current.next; 
	  } 
	 };
} 

//First I create an instance of the Singly Linked List
var list=new List(); 

//Gets number of elements in the list from the user
var nlist = prompt("Please input number of items", "0");

for(var i=1;i<=nlist;i++){ 
//Gets value for each element in the list
  var it = prompt("Enter value for item " +i);
  list.add(it);
}

//Gets the first element of the list
var d = list.get_id();

//Displays the element retrieved
alert(d);

//Adds the element back to the list
list.free_id(d);

//Displays all elements in the list
list.each(function(item) { 
 alert(item.data); 
});