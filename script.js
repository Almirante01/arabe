document.body.innerHTML = highlight("مُدَرِّسٌ");

function highlight(text){
  return text
    .replace(/َ/g, '<span style="color:blue">َ</span>')
    .replace(/ِ/g, '<span style="color:green">ِ</span>')
    .replace(/ُ/g, '<span style="color:red">ُ</span>')
    .replace(/ْ/g, '<span style="color:gray">ْ</span>')
    .replace(/ّ/g, '<span style="color:purple">ّ</span>');
}

  return result;
}
