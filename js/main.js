/*----- constants -----*/

/*----- app's state (variables) -----*/



/*----- cached element references -----*/

let buttons = document.querySelectorAll("button.alph");


/*----- event listeners -----*/

buttons.forEach(function(button){button.addEventListener('click', function() {console.log("clicked")})})

/*----- functions -----*/