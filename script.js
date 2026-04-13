// DATOS (puedes sustituir por JSON después)
let words = [
 {ar:"كَتَبَ", es:"escribir", type:"verbo"},
 {ar:"مُدَرِّسٌ", es:"profesor", type:"sustantivo"},
 {ar:"بَيْتٌ", es:"casa", type:"lugar"},
 {ar:"قِطٌّ", es:"gato", type:"animal"},
 {ar:"جَمِيلٌ", es:"bonito", type:"adjetivo"},
 {ar:"إِسْبَانِيَا", es:"España", type:"pais"},
 {ar:"وَ", es:"y", type:"nexo"}
];

let current = "all";
let user = [];

// HARAKAT COLORES
function highlight(text){
  let result = "";

  for (let char of text) {
    if (char === "\u064E") result += '<span class="fatha">َ</span>';
    else if (char === "\u0650") result += '<span class="kasra">ِ</span>';
    else if (char === "\u064F") result += '<span class="damma">ُ</span>';
    else if (char === "\u0652") result += '<span class="sukun">ْ</span>';
    else if (char === "\u0651") result += '<span class="shadda">ّ</span>';
    else result += char;
  }

  return result;
}

// MOSTRAR PALABRAS
function display(){
  let list = document.getElementById("list");
  list.innerHTML = "";

  words
  .filter(w => current==="all" || w.type===current)
  .forEach(w=>{
    list.innerHTML += `
      <div class="card">
        <div class="arabe">${highlight(w.ar)}</div>
        <div>${w.es}</div>
        <button onclick="speakText('${w.ar}')">🔊</button>
      </div>
    `;
  });
}

function filter(type){
  current = type;
  display();
}

// AUDIO
function speakText(text){
  let msg = new SpeechSynthesisUtterance(text);
  msg.lang="ar-SA";
  speechSynthesis.speak(msg);
}

function speak(){
  speakText(document.getElementById("wordInput").value);
}

// JUEGO
let correct = ["أنا","طالب","في","المدرسة"];

function loadGame(){
  let g = document.getElementById("game");
  g.innerHTML="";
  [...correct].sort(()=>Math.random()-0.5).forEach(w=>{
    let b=document.createElement("button");
    b.innerText=w;
    b.onclick=()=>select(w);
    g.appendChild(b);
  });
}

function select(w){
  user.push(w);
  document.getElementById("user").innerText=user.join(" ");
}

function check(){
  let frase=user.join(" ");
  let res=document.getElementById("result");

  if(frase===correct.join(" ")){
    res.innerHTML="✅ Correcto";
  } else {
    res.innerHTML="❌ Revisa el orden";
  }

  user=[];
  loadGame();
}

// CONVERSACIÓN AVANZADA
function checkAnswer(){
 let input = document.getElementById("answer").value;
 let res = document.getElementById("feedback");

 let errores = [];

 if(!input.includes("أنا")){
   errores.push("Falta el sujeto (أنا)");
 }

 if(!input.includes("في")){
   errores.push("Falta la preposición (في)");
 }

 if(input.split(" ").length < 2){
   errores.push("Frase demasiado corta");
 }

 if(errores.length===0){
   res.innerHTML="✅ Muy bien, frase correcta";
 } else {
   res.innerHTML="❌<br>"+errores.join("<br>");
 }
}

// INICIO
display();
loadGame();
