/*
  encrypt.js

  This file holds the functions to encryt the messages.


  Created 7-8-17   : Original commit
*/

function encrypt (){
  var rand = Math.floor(((Math.random() * (100 - 5 )) + 1) + 5);

  var message = document.getElementById( 'messageID').value;
  var newString = "";
  var asciiValue = 0;
  var key = rand;

  console.log("key : " + key);

  if( message.length != 0 ){
    newString += String.fromCharCode(key);

    console.log("newString: " + newString);

    for( var i = 0; i < message.length; i++ ){
      asciiValue = message.charCodeAt(i);

      console.log("message[" + i + "] is: " + message.charCodeAt(i));
      console.log("asciiValue is: " + asciiValue);

      asciiValue = (asciiValue + key);

      console.log("asciiValue + key is: " + asciiValue);

      newString += String.fromCharCode(asciiValue);

      console.log("newString is: " + newString);

      console.log("\n");


    }
  }


  document.getElementById( 'messageID').value = newString;

}

function decrypt(){

  var message = document.getElementById( 'messageID').value;
  var newString = "";
  var asciiValue = 0;
  var key = message.charCodeAt(0);

  if( message.length != 0 ){

    console.log("key is: " + key);

    for( var i = 1; i < message.length; i++ ){
      asciiValue = message.charCodeAt(i);


      newString += String.fromCharCode(asciiValue - key);
      console.log("asciiValue is: " + asciiValue);
      console.log("newString is: " + newString);

      console.log("\n");


    }
  }

  document.getElementById( 'messageID').value = newString;

}
