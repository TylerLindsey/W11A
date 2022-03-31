// PAGE NOTES: All sections are in the same order. Click, hover, and space event


// below are the 3 functions.
function makeGreen(eventDetails){
  console.log(eventDetails.target);
  eventDetails.target.style.color = "green";
}
// item#1 this sets a function to turn green and logs the details in the console so we can see what is going on.

function makeBlue(eventDetails){
  console.log(eventDetails.target);
  eventDetails.target.style.color = "blue";
}
// item#2 this sets a function to turn blue and logs the details in the console so we can see what is going on.

// function keyboardPressed(eventDetails){
//   console.log(eventDetails);
//   // document.getElementById('pressKey').innerText += Space.key;
// }
// item#3 


// The follow section links the ID names from HTML to JS by creating a variable that can be referenced.
let clickThis = document.getElementById('clickThis');
// item#1 

let hoverThis = document.getElementById('hoverThis');
// item#2

let pressKey = document.getElementById(`pressKey`);
// item#3


// Below is where I tell the machine to do a certain 'function' when a user on the page interacts with the page in some way. Clicking makes the clickThis green, hovering makes hoverThis blue and pressing space bar inside of the text box makes the system reprimand the user for not reading the instructions.
clickThis.addEventListener('click', makeGreen);
// item#1 

hoverThis.addEventListener('mouseover', makeBlue);
// item#2

pressKey.addEventListener('keypress', function(e){
  console.log(e);
  if (e.key === "" || e.code==='Space'){
    alert(`I said don't hit space! What if that detonated a bomb?`);
  }
});
// item#3
