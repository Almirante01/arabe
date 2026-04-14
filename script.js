let words = [];

// 🔥 RENDER ÁRABE PROFESIONAL
function renderArabic(text){

  const harakat = {
    "َ":"fatha",
    "ِ":"kasra",
    "ُ":"damma",
    "ْ":"sukun",
    "ّ":"shadda"
  };

  let result = "";

  for(let i=0; i<text.length; i++){

    let char = text[i];

    // si es haraka, la ignoramos sola
    if(harakat[char]) continue;

    let next = text[i+1];

    if(harakat[next]){
      result += `
        <span class="letra">
          ${char}
          <span class="${harakat[next]}">${next}</span>
        </span>
      `;
      i++;
    } else {
      result += `<span class="letra">${char}</span>`;
    }
  }

  return result;
}

// 📦 CARGAR DATOS
async function loadData(){
  let data = await fetch("data/vocab.json").then(r=>r.json());
  words = data;
  display();
}

// 🧾 MOSTRAR
function display(){
  let html = "";

  words.forEach(w=>{
    html += `
      <div class="card">
        <div class="arabe">${renderArabic(w.ar)}</div>
        <div>${w.es}</div>
      </div>
    `;
  });

  document.getElementById("list").innerHTML = html;
}

loadData();
