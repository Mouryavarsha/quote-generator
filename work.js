let button = document.querySelector("#btn");
let text = document.querySelector(".text");
let container = document.querySelector(".container")
let para = document.querySelector("p")
let newbtn  = document.querySelector(".new-btn")

let quotes = ["Hope is the belief in the probability of the possible rather than the necessity of the probable.","There’s a real sweet spot between challenge and hope – leaders make pathways that keep both firmly in view.","Well-told stories help turn moments of great crises into moments of new beginnings.","When we tell a story we enable the listener to enter its time and place with us, see what we see, hear what we hear, feel what we feel.","Narrative is not talking “about” values; rather narrative embodies and communicates values.","Social movements are often the “crucibles” within which participants learn to tell new stories of self as we interact with other participants.","There is no remedy for love but to love more.","Love has nothing to do with what you are expecting to get–only with what you are expecting to give–which is everything.","Where there is love there is life.","Whatever our souls are made of, his and mine are the same.","In love there are two things– bodies and words","When you have a dream, you've got to grab it and never let go.","Nothing is impossible. The word itself says 'I'm possible!","The bad news is time flies. The good news is you're the pilot."]

let randomElement = quotes[Math.floor(Math.random()*quotes.length)];

button.addEventListener("click", () =>{
   para.innerText  =`${randomElement}`
})

newbtn.addEventListener("click", () =>{
//  for(let quote of quotes)
para.innerText=quotes[Math.floor(Math.random()*quotes.length)];

 })