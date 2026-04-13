document.body.innerHTML = `
<div style="font-size:60px; direction:rtl;">
${highlight("مُدَرِّسٌ")}
</div>
`;

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
