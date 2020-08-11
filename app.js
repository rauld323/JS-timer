class Timer{
    //First define the constructor method.
    constructor(durationInput, startButton, pauseButton){   
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        //Event listerner has been binded to the elements
        this.startButton.addEventListener('click', this.start);
        //This Stops the ticking
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        //Activates 'tick' as soon as start is clicked
        this.tick();
        // This will make sure that tick runs every second. intervalr also returns a reference number
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        console.log("tick")
    }    
}

const durartionInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durartionInput, startButton, pauseButton)

