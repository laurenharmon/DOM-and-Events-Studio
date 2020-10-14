// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    let popUpResult = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (popUpResult === true) {
            flightStatus.innerHTML = "Shuttle in flight!";
            shuttleBackground.style.backgroundColor = "#668B8B";  
            spaceShuttleHeight.innerHTML = "10,000";
        }




});