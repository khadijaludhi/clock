const hourHand = document.querySelector('[data-hour-hand]'); /* searches for an element that has the attribute data-hour-hand, the square brackets notation allows you to target an element based on a specific attribute */
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

setInterval(setClock, 1000); /* calls the setClock function every 1000 milliseconds, ensures clock is updated every second */

function setClock() { 
    const currentDate = new Date(); /*  object is created using the Date constructor to represent the current date and time. 
    When a constructor is called with new, it automatically creates and returns a new instance of the object type.*/
    const secondsRatio = currentDate.getSeconds() / 60; /* gets the current seconds and divides it by 60 to get the ratio of the seconds */
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; /* gets the current minutes and adds the secondsRatio to it and divides it by 60 to get the ratio of the minutes */
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; /* gets the current hours and adds the minutesRatio to it and divides it by 12 to get the ratio of the hours */
    /*Ratios are calculated for the seconds, minutes, and hours based on the current time. These ratios represent the fraction of a full rotation each hand should make.*/
    setRotation(secondHand, secondsRatio); /* calls the setRotation function and passes in the secondHand and secondsRatio as arguments */
    setRotation(minuteHand, minutesRatio); /* calls the setRotation function and passes in the minuteHand and minutesRatio as arguments */
    setRotation(hourHand, hoursRatio); /* calls the setRotation function and passes in the hourHand and hoursRatio as arguments */
}

function setRotation(element, rotationRatio) { /* creates a function called setRotation that takes in two parameters, element (secondHand, minuteHand, hourHand elements in HTML) and rotationRatio */
    element.style.setProperty('--rotation', rotationRatio * 360); /* sets the --rotation property of the element to the rotationRatio multiplied by 360 (to convert it into deg) */
}

setClock(); /* calls the setClock function, initializes clock's initial state */