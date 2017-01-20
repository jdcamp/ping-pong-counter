$(function() {
  $("form").submit(function(event) {
    var userInput = $("input").val();
    if (textInputChecker.test(userInput)) {
      event.preventDefault();
      var numbers = counter(userInput);
      writeToList(numbers);
    } else {
      alert("input is invalid")
    }
  });
  var textInputChecker = /^[0-9]+$/

  var counter = function(myNumber) {
    var pingPongArray = [];
    for (var i = 1; i <= myNumber; i++) {
      if ((i % 15) === 0) {
        pingPongArray.push('ping-pong');
      } else if (i % 5 === 0) {
        pingPongArray.push('pong');
      } else if (i % 3 === 0) {
        pingPongArray.push('ping');
      } else {
        pingPongArray.push(i);
      }
    }
    return pingPongArray
  }

  var outputList = document.getElementById("output-list");

  var writeToList = function(myArray) {
    $(outputList).text("");
    for (var i = 0; i < myArray.length; i++) {
      var createLiElement = document.createElement("li");
      createLiElement.innerHTML = myArray[i];
      outputList.appendChild(createLiElement);
    }
  }
})
