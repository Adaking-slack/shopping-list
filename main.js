
//grab the form
document.getElementById('myForm').addEventListener('submit', saveList)
var listOutput = document.getElementById('listOutput').addEventListener('click', deleteList)




//create the saveList function

function saveList(e){

   //grab the input element and create a new array

   var myList = document.getElementById('myList').value;

   if(!validateForm(myList)){
      return false;
   }

   //create an array of objects

   var shoppingList ={
      name:myList 
   }

   //create local stoage
   //scheck if local storage is null
   if(localStorage.getItem('shoppingLists') === null){
      //init an array
      var shoppingLists = [];
      // add to array
      shoppingLists.push(shoppingList);
      //set to localstorage
      localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists))


   }else{
      //get shoppingLists from LoclStorage
      var shoppingLists = JSON.parse(localStorage.getItem('shoppingLists'));

      //add shoppinglist to array
      shoppingLists.push(shoppingList)

      //reset back to local storage
      localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists))

   }
//clear form
 document.getElementById('myForm').reset();

// re-fetch shoppingLists
fetchList()

//prevent the form from submitting
e.preventDefault();


}

//create a function to Delete

// function deleteList(url){
// //get loocl storage
// var shoppingLists = JSON.parse(localStorage.getItem('shoppingLists'));
// //loop through shoopinglist

// for(var i = 0; i < shoppingLists.length; i++){
//    if(shoppingLists[i].url == url){
//       // Remove from array
//       shoppingLists.slice(i, 1);
//     }
// }



// //reset back to local storge
// localStorage.setItem('shoppingLists', JSON.stringify(shoppingLists))

// //re fetch shopping list
// fetchList();
// }



function deleteList(e){


   if(e.target.classList.contains("fa-trash")){
      listOutput.removeChild(e.target.parentElement);
      listOutput.removeChild(listOutput)
   }
}


//create the fetchList function
function fetchList(){
   //get shoppingLists from local Storage
   var shoppingLists = JSON.parse(localStorage.getItem('shoppingLists'));

   //get the id for the output

   var listOutput = document.getElementById('listOutput')

   
   //display the output

   listOutput.innerHTML = " ";
   for (var i = 0; i < shoppingLists.length; i++){
      var name = shoppingLists[i].name;

      listOutput.innerHTML += '<ul>'+
                              '<li>'+ 
                              '<h3>'+name+
                              //  '<i  class="fa fa-trash"></i>'
                              '<a  class="fa fa-trash" onClick="deleteList" href="#"></a> ' +
                              '</h3>'+
                              '</li>'+
                                '</ul>';

   }




}


//validate form

function validateForm(myList){
 if(!myList) {
   alert('Please fill in the form');
   return false;
 }

 return true;

}