class Timer{
    //First define the constructor method.
    constructor(durationInput, startButton, pauseButton){   
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        //Event listerner has been binded to the elements
        this.startButton.addEventListener('click', this.start);
    }
    start(){
        console.log(this)
    }
}

const durartionInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durartionInput, startButton, pauseButton)
timer.start();