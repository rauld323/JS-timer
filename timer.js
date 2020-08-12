class Timer {
    //First define the constructor method.
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        //This will process the callbacks that were passed in
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        //Event listerner has been binded to the elements
        this.startButton.addEventListener('click', this.start);
        //This Stops the ticking
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        //Activates 'tick' as soon as start is clicked
        this.tick();
        // This will make sure that tick runs every second. intervalr also returns a reference number
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        //This will stop the timer from going past negative/
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            //Allows number to be subtracted by 1 in the input section
            this.timeRemaining = this.timeRemaining - 1;
            if (this.onTick) {
                this.onTick();
            }
        }
    };
    //Helper methods
    //Getter* (Retrieves a variable within a class.)
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    //Setter 
    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}