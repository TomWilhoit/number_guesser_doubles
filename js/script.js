window.onload = function() {
  let randomNumber;
  let minNum,maxNum;

  class Player{
    constructor(inName){
      this.name = inName || "player1";
      this.guess = "";
      this.guessHistory = {};
    }
  }


  // Buttons
  const updateButton = document.querySelector('#update-button');
  const clearButton = document.querySelector('#clear-button');
  const resetButton = document.querySelector('#reset-button');
  const submitButton = document.querySelector('#submit-button');
  /*                  END OF VARIABLES                     */

  init(); //means set variables(do i need to?)

  // Updates Number Range
  updateButton.addEventListener('click', function(e) {
    e.preventDefault();
    updateMinMaxNumber();
    generateRandomNumber();
  });

  // Clear Button, clears just guess-input
  clearButton.addEventListener('click', function(e) {
    e.preventDefault();
    clearGuessInput();
    clearMinRangeInput();
    clearMaxRangeInput();
  });

  // Reset Button, reloads page
  resetButton.addEventListener('click', function() {
    // Can we reset state instead please?
    // refreshes the page;
    init();
  });

  // Guess Button,
  submitButton.addEventListener('click', function(e) {
    // Error check input
    /*
      :Default player name if none entered
      :
    */
    e.preventDefault();
    //PER PLAYER GUESS
    if (!getGuessInput()) {
      setGuessResponse('Enter a Number in Range');
      // break;
    } else if (getGuessInput() < getMinNumber()
      || getGuessInput() > getMaxNumber()) {
        setGuessResponse('Number out of Range');
    } else if (getGuessInput() < randomNumber) {
      setGuessResponse('Guess too Low');
      setLastGuess(getGuessInput());
    } else if (getGuessInput() > randomNumber) {
      setGuessResponse('Guess too High');
      setLastGuess(getGuessInput());
    } else {
      setGuessResponse('BOOM');
      //makes cards
        //both names as title
        //winner name and winner as title 
        //number of tries for the winner
    }
  });

  //CARD FROM COMP


  // Function Section
  function generateRandomNumber() {
    const min = getMinNumber();
    const max = getMaxNumber();
    randomNumber = Math.floor(Math.random() * (max - min)) + min + 1;
  }

  function getMinNumber() {
    return parseInt(document.querySelector('#min-range-number').innerText);
  }
  function setMinNumber(inValue) {
    document.querySelector('#min-range-number').innerText = inValue;
  }

  function getMinRangeInput() {
    return document.querySelector('#min-range-input').value;
  }
  function clearMinRangeInput() {
    document.querySelector('#min-range-input').value = "";
  }

  function getMaxRangeInput() {
    return parseInt(document.querySelector('#max-range-input').value);
  }
  function clearMaxRangeInput() {
    document.querySelector('#max-range-input').value = "";
  }

  function getMaxNumber() {
    return parseInt(document.querySelector('#max-range-number').innerText);
  }
  function setMaxNumber(inValue) {
    document.querySelector('#max-range-number').innerText = inValue;
  }

  function getGuessInput() {
    return parseInt(document.querySelector('#guess-number-input').value);
  }
  function clearGuessInput() {
    document.querySelector('#guess-number-input').value = "";
  }

  function getGuessResponse() {
    return document.querySelector('#guess-response').innerText;
  }
  function setGuessResponse(player, inValue) {
    document.querySelector(`#${player}-guess-response`).innerText = inValue;
  }

  function getLastGuess() {
    return parseInt(document.querySelector('#guessed-number').innerText);
  }
  function setLastGuess(player, inValue) {
    document.querySelector(`#${player}-guessed-number`).innerText = inValue;
  }

  function toggleError(minOrMax, showOrHide){
    const tempErrorEle = document.querySelector(`#${minOrMax}-range-error`);
    tempErrorEle.style.visibility = showOrHide;
  }

  function updateMinMaxNumber() {

    // If this func does not return a num, set error message to visible
    if (!getMinRangeInput()) {
      toggleError('min','visible');
    } else { // else take input and set minrange number
      toggleError('min', 'hidden');
      setMinNumber(getMinRangeInput());
    }

    // If this func does not return a num, set error message to visible
    if(!getMaxRangeInput()) {
      toggleError('max','visible');
    }else{ // else take input and set minrange number
      toggleError('max','hidden');
      setMaxNumber(getMaxRangeInput());
    }
  }

  // Literally just sets the app to an initial state
  function init() {
    setMinNumber('1');
    setMaxNumber('100');
    setGuessResponse('challenger1',' ');
    setGuessResponse('challenger2',' ');
    setLastGuess('challenger1','Who');
    setLastGuess('challenger2','Knows');
    generateRandomNumber();
    
    // startEventListeners(); // can I do this?
  }
};
