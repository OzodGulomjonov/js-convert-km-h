var elForm = document.querySelector(".convert__form");
var elInput = document.querySelector(".convert__form-input");
var elPWalk = document.querySelector("#convert__id-1");
var elPCycle = document.querySelector("#convert__id-2");
var elPDrive = document.querySelector("#convert__id-3");
var elPPlane = document.querySelector("#convert__id-4");


elForm.addEventListener ("submit" , function (event) {

    event.preventDefault();
    var elInputValue = elInput.value

    if(!isNaN (elInputValue)) { 

        elPWalk.textContent = (`${Math.floor(((elInputValue) / 3.6)).toFixed(0)} hours 
        ${ ((((elInputValue / 3.6).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);


        elPCycle.textContent = (`${Math.floor(((elInputValue) / 20.1)).toFixed(0)} hours 
        ${ ((((elInputValue / 20.1).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);

        elPDrive.textContent = (`${Math.floor(((elInputValue) / 70)).toFixed(0)} hours 
        ${ ((((elInputValue / 70).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);

        elPPlane.textContent = (`${Math.floor(((elInputValue) / 800)).toFixed(0)} hours 
        ${ ((((elInputValue / 800).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);
    }else {
        alert ("Please enter a NUMBER !")
    }
})      