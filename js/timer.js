import Sound from "./sounds.js"


export default function Timer({
  minutesDisplay,
  secondsDisplay,
  pause
}) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset(){
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown(){
    timerTimeOut = setTimeout(function(){
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      let finished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if(finished) {
        pause()
        Sound().timeEnd()
        return
      }

      if(seconds <= 0) {
        seconds = 2
        minutes--
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function addTime(){
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
    minutes = minutesDisplay.textContent
    updateDisplay(minutes, 0)
  }

  function removeTime(){
    if(minutesDisplay.textContent <= 5) {
      minutesDisplay.textContent = 5
    }
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
  
    let minutes = minutesDisplay.textContent
  
    updateDisplay(minutes, 0) 
  }

  function stopTime(){
    updateDisplay(minutes, 0)
    pause()
    clearTimeout(timerTimeOut)
  }

  return{
    updateDisplay,
    reset,
    countdown,
    addTime,
    removeTime,
    stopTime,
  }



}