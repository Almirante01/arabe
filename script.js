let words = [
  {ar:"كَتَبَ", es:"escribir"},
  {ar:"مُدَرِّسٌ", es:"profesor"},
  {ar:"بَيْتٌ", es:"casa"},
  {ar:"قَلَمٌ", es:"bolígrafo"}
];

// FUNCIÓN DEFINITIVA
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

// MOSTRAR
function display(){
  let list = document.getElementById("list");
  list.innerHTML = "";

  words.forEach(w=>{
    list.innerHTML += `
      <div class="card">
        <div class="arabe">${highlight(w.ar)}</div>
        <div>${w.es}</div>
      </div>
    `;
  });
}

display();
