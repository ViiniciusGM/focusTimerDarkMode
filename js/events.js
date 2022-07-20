import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonTree,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  body,
  btnLight,
  btnDark,
  volumeTree,
  volumeRain,
  volumeCoffe,
  volumeFire
} from "./elements.js"

export default function events({controls, timer, sound}){
  buttonPlay.addEventListener("click", function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
  })
  
  buttonPause.addEventListener('click', () => {
    controls.pause()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', () => {
    timer.stopTime()
    sound.pressButton()
  })
  
  buttonAdd.addEventListener('click', () => {
    timer.addTime()
    sound.pressButton()
  })
  
  buttonRemove.addEventListener('click', () => {
    timer.removeTime()
    sound.pressButton()
  })

  // ====== SOUND ============================

  function bgChanger(bgType, btnType) {
    body.classList.toggle(bgType)
    btnType.classList.toggle('cardjs')
  }
  
  buttonTree.addEventListener('click', function(){
    bgChanger('tree-bg', buttonTree)

    if(body.classList.contains('tree-bg')){
      sound.soundTree()
    } else {
      sound.soundStopTree()
    }
  })
  
  buttonRain.addEventListener('click', function(){
    bgChanger('rain-bg', buttonRain)
    if(body.classList.contains('rain-bg')){
      sound.soundRain()
    } else {
      sound.soundStopRain()
    }
  })
  
  buttonCoffeShop.addEventListener('click', function(){
    bgChanger('coffe-bg', buttonCoffeShop)
    if(body.classList.contains('coffe-bg')){
      sound.soundCoffe()
    } else {
      sound.soundStopCoffe()
    }
  })
  
  buttonFire.addEventListener('click', function(){
    bgChanger('fire-bg', buttonFire)
    if(body.classList.contains('fire-bg')){
      sound.soundFire()
    } else {
      sound.soundStopFire()
    }
  })

  const volumeSetTree = () =>{
    sound.volumeTreeSet(volumeTree.value)
  }

  volumeTree.addEventListener('input', volumeSetTree)  

  const volumeSetRain = () => {
    sound.volumeRainSet(volumeRain.value)
  }

  volumeRain.addEventListener('input', volumeSetRain)  

  const volumeSetCoffe = () => {
    sound.volumeCoffeSet(volumeCoffe.value)
  }

  volumeCoffe.addEventListener('input', volumeSetCoffe)  

  const volumeSetFire = () => {
    sound.volumeFireSet(volumeFire.value)
  }

  volumeFire.addEventListener('input', volumeSetFire)  


  // ======DARK MODE============================

  btnLight.addEventListener('click', function(){
    btnDark.classList.remove('hide')
    btnLight.classList.add('hide')

    body.classList.add('dark-mode')
   })

   btnDark.addEventListener('click', function(){
    btnLight.classList.remove('hide')
    btnDark.classList.add('hide')

    body.classList.remove('dark-mode')
  })

}