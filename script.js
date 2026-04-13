let words = [];
let user = [];

// HARAKAT COLORES
function highlight(text){
  return text
    .replace(/َ/g, '<span style="color:blue">َ</span>')
    .replace(/ِ/g, '<span style="color:green">ِ</span>')
    .replace(/ُ/g, '<span style="color:red">ُ</span>')
    .replace(/ْ/g, '<span style="color:gray">ْ</span>')
    .replace(/ّ/g, '<span style="color:purple">ّ</span>');
}

// CARGAR DATOS
async function loadData(){
  let data = await fetch("data/vocabulario.json").then(r=>r.json());
  words = data;
  display();
}

// MOSTRAR VOCABULARIO
function display(){
  let html = "";
  words.forEach(w=>{
    html += `
      <div class="card">
        <img src="${w.img}">
        <div class="arabe">${highlight(w.ar)}</div>
        <div>${w.es}</div>
        <button onclick="playAudio('${w.audio}')">🔊</button>
      </div>
    `;
  });
  document.getElementById("list").innerHTML = html;
}

// AUDIO
function playAudio(src){
  new Audio(src).play();
}

// SECCIONES
function showSection(sec){
  document.querySelectorAll(".section").forEach(s=>s.style.display="none");
  document.getElementById(sec).style.display="block";
}

// 🎮 JUEGO
let correct = ["أنا","طالب","في","المدرسة"];

function loadGame(){
  let g = document.getElementById("gameWords");
  g.innerHTML="";
  [...correct].sort(()=>Math.random()-0.5).forEach(w=>{
    let b=document.createElement("button");
    b.innerText=w;
    b.onclick=()=>selectWord(w);
    g.appendChild(b);
  });
}

function selectWord(w){
  user.push(w);
  document.getElementById("userSentence").innerText=user.join(" ");
}

function checkGame(){
  let res=document.getElementById("gameResult");

  if(user.join(" ")===correct.join(" ")){
    res.innerHTML="✅ Correcto";
  } else {
    res.innerHTML="❌ Orden incorrecto";
  }

  user=[];
  loadGame();
}

// 🧠 CONVERSACIÓN
let questions = [
 {q:"¿Dónde estás?", expected:["أنا","في"]},
 {q:"¿Qué haces?", expected:["أنا"]}
];

let currentQ=0;

function showQuestion(){
 document.getElementById("question").innerText=questions[currentQ].q;
}

function checkAnswer(){
 let input=document.getElementById("answer").value;
 let res=document.getElementById("feedback");

 let errores=[];

 if(!input.includes("أنا")){
   errores.push("Falta sujeto (أنا)");
 }

 if(input.split(" ").length<2){
   errores.push("Frase incompleta");
 }

 if(errores.length===0){
   res.innerHTML="✅ Correcto";
 } else {
   res.innerHTML="❌<br>"+errores.join("<br>");
 }

 currentQ=(currentQ+1)%questions.length;
 showQuestion();
}

// INICIO
loadData();
loadGame();
showQuestion();
