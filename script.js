function highlight(text){
  return text
    .replace(/َ/g, '<span style="color:blue">َ</span>')
    .replace(/ِ/g, '<span style="color:green">ِ</span>')
    .replace(/ُ/g, '<span style="color:red">ُ</span>')
    .replace(/ْ/g, '<span style="color:gray">ْ</span>')
    .replace(/ّ/g, '<span style="color:purple">ّ</span>');
}

// 👇 COPIA LA PALABRA AQUÍ (YA ESTÁ PUESTA)
document.body.innerHTML = highlight("مُدَرِّسٌ");
