let words = [
 {ar:"كَتَبَ", es:"escribir", type:"verbo"},
 {ar:"مُدَرِّسٌ", es:"profesor", type:"sustantivo"},
 {ar:"بَيْتٌ", es:"casa", type:"lugar"},
 {ar:"قِطٌّ", es:"gato", type:"animal"}
];

// 🔥 HARAKAT COLOREADOS (VERSIÓN QUE FUNCIONA)
function highlight(text){
  return text
    .replace(/َ/g, '<span style="color:blue">َ</span>')
    .replace(/ِ/g, '<span style="color:green">ِ</span>')
    .replace(/ُ/g, '<span style="color:red">ُ</span>')
    .replace(/ْ/g, '<span style="color:gray">ْ</span>')
    .replace(/ّ/g, '<span style="color:purple">ّ</span>');
}

// MOSTRAR
function display(){
  let list = document.getElementById("list");

  let html = "";

  words.forEach(w=>{
    html += `
      <div class="card">
        <div class="arabe">${highlight(w.ar)}</div>
        <div>${w.es}</div>
      </div>
    `;
  });

  list.innerHTML = html;
}

display();
