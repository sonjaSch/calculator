$(document).ready(function(){
//calculator: cheating with eval 

//inputs Array that stores the users input
var input = [""];
// String that holds the totalString
var total;

var screen = $('.screen');
screen.text('0');

 var stringDefaultLength = 15;
// functions

// update the screen 
/*
 *  update joins all elements of the input-array into a string and stores it in total
 *  the new string is displayed on the screen
 */
function update(){
	total = input.join('');
	$('.screen').text(total);
  console.log(total);
}

// get the total
/*
 * getTotal gives u the result of the arithmetic operations using javascript eval() function
 * if u have an arithmetic expression string eval() evaluates it  
 * the (ugly) try catch block should prevent the eval() function from executing if there is invalid input
 * finally the input-array contains to an empty string
 */
function getTotal(){
	total = input.join('');

  try{
      var result = eval(total);
      $('.screen').text(result);
  }
  catch(e){
    alert('Invalid input');
  }

	console.log(result);
	input = [''];
}

/*
 * clearAll sets the stored string to an empty string and calls update() method
 */
$(".clearAll").click(function(){
	input = [''];
  screen.text('0');
	update();
});

/*
 * as one of the numButtons is clicked number gets the text content of the clicked button
 * number is added to the input array (at the end of the array)
 * finally the screen is updated
 */
$(".numButton").click(function(){
	var number = $(this).text();
	input.push(number);
	update();
});


/* 
 * as one of the operationButtons is clicked number gets the text content of the clicked button
 * operation is added to the input array (at the end oth the array)
 * finally the screen is updated
 */
$(".operationButton").click(function(){
	var operation = $(this).text();
	input.push(operation);
	update();
});

/*
 * if "equals" is clicked first there is checked if the second last input-arrayElement is the divide-symbol and if the last element is 0
 * if this is the case the alert is triggered
 * than it's checked if last element is NOT a math operator and the getTotal function is called
 */
$('.equals').click(function(){
	if(input[input.length-2] == '/' && input[input.length-1] == 0){
		alert('A NUMBER CAN NOT BE DIVIDED BY 0!! YOU IDIOT!');
	}
	else if(input[input.length-1].indexOf('+', '-', '*', '/') === -1){
			getTotal();
	}

});
/*function truncateString(stringToTest){
  stringToTest.join('');
  if(stringToTest.length = 1){
    stringToTest.length =  stringDefaultLength;
  }
  if ( stringToTest.length >= stringDefaultLength ) {
       stringToTest.slice ( 0, stringDefaultLength );
  }
}*/

/*
 * the KeyboardEvent.which read-only property returns the numeric keyCode of the key pressed
 * each time there is a keyboardinput the matching textcontent of the keycode is added to the inputs array
 * if "equals" is pressed getTotal() is called --> NO 
 *  to not override teh getTotal() function return the $('#equals').click() event
 */
 $(document).keydown(function(key){
    var pressedKey;
    var operationKey;
  
    switch(parseInt(key.which,10)){
      case 96:
      case 48:
       // console.log('0 was pressed');
         pressedKey = $('.digit0').text();
         input.push(pressedKey);
         break;
      case 97:
      case 49:  
        pressedKey = $('.digit1').text();
        input.push(pressedKey);
        break;
      case 98:
      case 50: 
         pressedKey = $('.digit2').text();
         input.push(pressedKey);
         break;
      case 99:
      case 51:
        pressedKey = $('.digit3').text();
        input.push(pressedKey);
        break; 
      case 100:
      case 52:
         pressedKey = $('.digit4').text();
         input.push(pressedKey);
         break;
      case 101:
      case 53:
        pressedKey = $('.digit5').text();
        input.push(pressedKey);
        break;
      case 102:
      case 54:
         pressedKey = $('.digit6').text();
         input.push(pressedKey);
         break;
      case 103:
      case 55:
        pressedKey = $('.digit7').text();
        input.push(pressedKey);
        break;
      case 104:
      case 56:
         pressedKey = $('.digit8').text();
         input.push(pressedKey);
         break;
      case 105:
      case 57:
        pressedKey = $('.digit9').text();
        input.push(pressedKey);
        break; 
      case 110:
        pressedKey = $('.decimal').text();
        input.push(pressedKey);
        break;
      case 106:
         operationKey = $('.times').text();
         input.push(operationKey)
         break;
      case 107:
        operationKey = $('.plus').text();
        input.push(operationKey);
        break;
       case 109:
         operationKey = $('.minus').text();
         input.push(operationKey);
         break;
       case 111:
         operationKey = $('.divide').text(); 
         input.push(operationKey);
         break;   
       case 61:
       //enter
       case 13:
        /* operationKey = $('.equals').text();
         getTotal(); 
         console.log(operationKey);*/
        return $(".equals").click();
         break;   
   }
   update();

});


/*
TODO:
***Fix keydown event*** done
*/
});

