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

// var newDiv = document.createElement('div');

// // add a class
// newDiv.className = 'Ebuka';

// newDiv.id = 'Solomon';

// newDiv.setAttribute('title', 'Hello Div');

// // create text node
// var newDivText = document.createTextNode('Welcome to Nigeria');

// // add text to div
// newDiv.appendChild(newDivText);

// console.log(newDiv);

var form  = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete Item
itemList.addEventListener('click',removeItem);
// Filter
filter.addEventListener('keyup',filterItems);

// Add a function to add item
function addItem(e){
    e.preventDefault();
    // console.log(123);

    // Get the input value
    var newItem = document.getElementById('item').value;
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // console.log(li);

    // Add text node with input
    li.appendChild(document.createTextNode(newItem));
    
    //create delete button
    var deleteBtn = document.createElement('button');
    
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    // Append li to list 
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Filter Item
function filterItems(e){
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
    //   console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
    });
}


































