// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    
    let takeOffButton = document.getElementById("takeoff");
        takeOffButton.addEventListener("click", function (event) {
        let popUpResult = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (popUpResult === true) {
            flightStatus.innerHTML = "Shuttle in flight!";
            shuttleBackground.style.backgroundColor = "blue"; 
            spaceShuttleHeight.innerHTML = "10000";
        }
    });

    let landButton = document.getElementById("landing");
        landButton.addEventListener("click", function (event) {
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
    });

    let abortButton = document.getElementById("missionAbort")
        abortButton.addEventListener("click", function (event) {
            let confirmResult = window.confirm("Confirm that you want to abort the mission.");
                if (confirmResult === true) {
                    flightStatus.innerHTML = "Mission aborted.";
                    shuttleBackground.style.backgroundColor = "green";
                    spaceShuttleHeight.innerHTML = "0";
                }
        })

});