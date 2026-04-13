let palabra = "مُدَرِّسٌ";

// Mostrar código Unicode de cada carácter
for (let c of palabra) {
  console.log(c, c.charCodeAt(0).toString(16));
}

document.body.innerHTML = palabra;
