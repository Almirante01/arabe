let words = [];
let current = "all";
let user = [];

async function loadData() {

  const files = [
    {file:"verbos.json", type:"verbo"},
    {file:"sustantivos.json", type:"sustantivo"},
    {file:"adjetivos.json", type:"adjetivo"},
    {file:"animales.json", type:"animal"},
    {file:"paises.json", type:"pais"},
    {file:"lugares.json", type:"lugar"},
    {file:"conectores.json", type:"nexo"}
  ];

  for (let f of files) {
    let data = await fetch("data/" + f.file).then(r => r.json());
    words.push(...data.map(w => ({...w, type:f.type})));
  }

  display();
}

function highlight(text){
  return text
    .replace(/\u064E/g, '<span class="fatha">َ</span>')   // fatha
    .replace(/\u0650/g, '<span class="kasra">ِ</span>')   // kasra
    .replace(/\u064F/g, '<span class="damma">ُ</span>')   // damma
    .replace(/\u0652/g, '<span class="sukun">ْ</span>')   // sukun
    .replace(/\u0651/g, '<span class="shadda">ّ</span>'); // shadda
}

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

function speakText(text){
  let msg = new SpeechSynthesisUtterance(text);
  msg.lang="ar-SA";
  speechSynthesis.speak(msg);
}

function speak(){
  speakText(document.getElementById("wordInput").value);
}

// JUEGO + CORRECCIÓN
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
    return;
  }

  if(!frase.startsWith("أنا")){
    res.innerHTML="❌ El sujeto debe ir primero";
    return;
  }

  if(!frase.includes("في")){
    res.innerHTML="❌ Falta preposición (في)";
    return;
  }

  res.innerHTML="❌ Revisa el orden de la frase";
}

loadData();
loadGame();
