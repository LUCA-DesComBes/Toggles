let CSB = document.querySelectorAll(input)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for(i = 0; i<CSB.length; i++){
    CSB.addEventListener("click", getRandomInt)
    let r = document.getRandomInt(min,max)
  }
  CSB[r]
