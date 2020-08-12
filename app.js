//Query Selectors
const durartionInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause')


const timer = new Timer(durartionInput, startButton, pauseButton, {
    onStart(){
        console.log('Timer Started')
    },
    onTick(){
        console.log('Timer just ticked down')
    },
    onComplete(){
        console.log('Timer is completed')
    }
})

