//getElementsByTagName allows us to get the elements by the tag 

var list = document.getElementsByTagName('ul')[0];

// ADD NEW ITEM TO END OF LIST

//createElement method creates element by tag name 
//createTextNode creates the text
//appendChild appends the child of the node element, or add test to the list and then to the end of the list 

var item = document.createElement('li');
var endText = document.createTextNode('cream');
item.appendChild(endText);
list.appendChild(item);


// ADD NEW ITEM START OF LIST

//Using similiar methods above except for insertBefore which allows us to add the item to the first part of the list

item = document.createElement('li');
startText = document.createTextNode('kale');
item.appendChild(startText);
list.insertBefore(item, list.firstChild);


// ADD A CLASS OF COOL TO ALL LIST ITEMS

// here we retrieve the list of elemenets by tag name 
var Listitem = document.getElementsByTagName('li');

//Add class "cool" to list items
for (var i = 0; i < Listitem.length; i++) {
    Listitem[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

//We grab the H2 tag 
var heading = document.getElementsByTagName('h2')[0];
// and then get the text inside the tag
var headingText = heading.innerHTML;
// then we add the number of items to the tag inside span
heading.innerHTML = headingText +  "<span>" + Listitem.length + "</span>";


                                           
