let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", 
               "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

 let stageEl = document.getElementById("stage")
 let fightButton = document.getElementById("fightButton")

 fightButton.addEventListener("click", function(){
      stageEl.textContent = fighters[Math.ceil(Math.random()*fighters.length)] + "Vs" + 
       fighters[Math.ceil(Math.random()*fighters.length)]
       
 })



