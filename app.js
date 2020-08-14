//Query Selectors
const durartionInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle')

//Use it to calculate the parameter
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter); 

let durationl
const timer = new Timer(durartionInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        )
    },
    onComplete(){
        console.log('Timer is completed')
    }
})

