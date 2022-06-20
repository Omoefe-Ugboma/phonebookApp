//  console.dir(document)

// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = 234
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[0])
// document.all[0].textContent = 'Welcome';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Welcome';
// headerTitle.innerText = 'Welcome to our';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello<h3>';
// header.style.borderBottom = 'solid 5px red';

// GETELEMENTBYCLASSNAME
// var items  = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[0].textContent = 'Hello World';
// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'red';
// items[0].style.color = 'white';

// for(var i = 0; i < items.length; i++){
//     items[i].style['background-color'] = 'red';
// }


// GETELEMENTsBYTAGNAME
// var li  = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[0].textContent = 'Hello World';
// li[0].style.fontWeight = 'bold';
// li[0].style.backgroundColor = 'red';
// li[0].style.color = 'white';

// for(var i = 0; i < li.length; i++){
//     li[i].style['background-color'] = 'blue';
// }

// QuerySELECTOR 
// var Header = document.querySelector('main-header');
// Header.style.borderBottom = 'solid 4px red';

// var input = document.querySelector('input');
// input.value = 'Hellow World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Ebuka";

// var item = document.querySelector('.list-group-item');
// item.style.backgroundColor = "red"; 

// var lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.backgroundColor = "red";

// var lastItem = document.querySelector
// ('.list-group-item:nth-child(1)');
// lastItem.style.backgroundColor = "red";

// QuerySelectorALL
// var titles = document.querySelectorAll
// ('.title');
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll
// ('li:nth-child(odd)');
// var even = document.querySelectorAll
// ('li:nth-child(even)');

// odd.style.backgroundColor = 'red';
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'red';
//     even[i].style.backgroundColor = 'green';
// }

var newDiv = document.createElement('div');

// add a class
newDiv.className = 'Ebuka';

newDiv.id = 'Solomon';

newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('Welcome to Nigeria');

// add text to div
newDiv.appendChild(newDivText);

console.log(newDiv);














