function pintarHarakat(texto) {

  let resultado = "";

  for (let i = 0; i < texto.length; i++) {

    let letra = texto[i];
    let siguiente = texto[i+1];

    resultado += letra;

    if (siguiente === "َ") {
      resultado += '<span style="color:blue">َ</span>';
      i++;
    }
    else if (siguiente === "ِ") {
      resultado += '<span style="color:green">ِ</span>';
      i++;
    }
    else if (siguiente === "ُ") {
      resultado += '<span style="color:red">ُ</span>';
      i++;
    }
    else if (siguiente === "ْ") {
      resultado += '<span style="color:gray">ْ</span>';
      i++;
    }
    else if (siguiente === "ّ") {
      resultado += '<span style="color:purple">ّ</span>';
      i++;
    }

  }

  return resultado;
}

// TEXTO CONTROLADO (IMPORTANTE)
let palabra = "مُدَرِّسٌ";

document.body.innerHTML = `
<div style="font-size:60px; direction:rtl;">
${pintarHarakat(palabra)}
</div>
`;
